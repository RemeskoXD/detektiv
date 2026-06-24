/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { DataProvider } from "./DataContext";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </DataProvider>
  );
}
