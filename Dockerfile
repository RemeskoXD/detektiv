FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install all dependencies (including dev)
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite React app and the Express server
RUN npm run build

# Production image
FROM node:22-alpine

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the built artifacts from the builder stage
COPY --from=builder /app/dist ./dist
# Copy the initial data.json file
COPY --from=builder /app/data.json ./data.json

# Expose port 3000 which is used by our Express server
EXPOSE 3000

# Start the application using the generated server.cjs
CMD ["npm", "start"]
