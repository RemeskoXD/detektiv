import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), "data.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "986387DULEGJDZGAUZDGO738";

app.use(express.json());

// Initialize default data if not exists
const defaultData = {
  heroTitle: "Důvěřuj,\nPrověřuj,\nPŘEDCHÁZEJ.",
  heroDescription: "Diskrétnost, profesionalita a efektivnost. Nabízíme detektivní služby soukromým osobám, firmám i právním kancelářím, více než 30 let.",
  certificates: [
    {
      title: "Člen ČKBS",
      description: "Osvědčení o členství v Hospodářské komoře České republiky prostřednictvím ČKBS.",
      image: "https://web2.itnahodinu.cz/detektiv/1.webp",
      link: "https://ckbs.cz/",
      icon: "Shield"
    },
    {
      title: "Člen bezpečnostních služeb",
      description: "Český klub bezpečnostních služeb z.s. - platné osvědčení o členství.",
      image: "https://web2.itnahodinu.cz/detektiv/2.webp",
      icon: "Award"
    },
    {
      title: "Člen ČKDS",
      description: "Česká komora detektivních služeb. Od roku 2005 člen profesního sdružení a regionální zmocněnec pro Olomoucký kraj.",
      image: "https://web2.itnahodinu.cz/detektiv/certifikat-clena-ckds.jpg",
      link: "https://ckds.cz/",
      icon: "Target"
    },
    {
      title: "Členství v hospodářské komoře",
      description: "Zapsán a aktivní v profesních sdruženích.",
      image: "https://web2.itnahodinu.cz/detektiv/osvedceni-clenstvi-v-hk.jpg",
      icon: "BadgeCheck"
    },
    {
      title: "Manažer bezpečnostní služby",
      description: "Osvědčení pro management a řízení bezpečnostních složek.",
      image: "https://web2.itnahodinu.cz/detektiv/4.jpg",
      icon: "ShieldAlert"
    },
    {
      title: "Detektivní specialista",
      description: "Certifikace pro výkon odborné detektivní činnosti.",
      image: "https://web2.itnahodinu.cz/detektiv/osvedceni-detektiv-spec.jpg",
      icon: "Search"
    },
    {
      title: "Mezinárodní bezpečnost",
      description: "Certifikát znalostí pro oblast mezinárodní bezpečnosti.",
      image: "https://web2.itnahodinu.cz/detektiv/osvedceni-mezin-konf.jpg",
      icon: "Globe"
    },
    {
      title: "Znalost zbraní",
      description: "Oprávnění a zkoušky předepsané pro nakládání a manipulaci se zbraněmi.",
      image: "https://web2.itnahodinu.cz/detektiv/seminar-zak-o-zbranich.jpg",
      icon: "Crosshair"
    }
  ],
  about: {
    title: "O mně",
    subtitle: "Více než 30 let zkušeností v oboru komerční bezpečnosti a detektivních služeb.",
    quote: "V oboru komerční bezpečnosti a detektivních služeb pracuji nepřetržitě od roku 1992.",
    text1: "Začínal jsem nejprve jako zaměstnanec, od roku 1995 už pracuji jako OSVČ. Hlavní náplní mé činnosti je vyhledávání a monitorování osob, majetku, zjišťování informací a získávání důkazního materiálu.",
    text2: "Získal jsem bohaté zkušenosti v oblasti ostrahy objektů se služebními psy, při poskytování služeb osobní ochrany a také převozů cenností a finanční hotovosti.",
    card1Title: "Odborné členství",
    card1Text: "Od roku 2005 jsem členem profesního sdružení Česká komora detektivních služeb. Působím také v prezidiu Českého klubu bezpečnostních služeb jako hospodář a vedoucí sekce detektivové.",
    card2Title: "Naprostá diskrétnost",
    card2Text: "V kooperaci s prověřenými kolegy poskytujeme služby advokátním kancelářím, obchodním společnostem i fyzickým osobám s maximálním důrazem na mlčenlivost.",
    approachTitle: "Můj přístup",
    approachText: "Profesi soukromého detektiva jsem si zvolil proto, že se v ní mohu realizovat, komunikovat s lidmi a pomáhat jim v nelehkých životních situacích. Nejvíce mě naplňuje různorodost této práce a svoboda v rozhodování, jak nejlépe dosáhnout cíle pro své klienty."
  },
  services: {
    subtitle: "Co pro vás mohu udělat",
    title: "Nabídka služeb",
    listTitle: "Výběr z nabídky služeb:",
    items: [
      { text: "Pátrání po osobách a věcech", highlight: false },
      { text: "Zjišťování, prověřování a analýza informací, včetně jejich zobrazení v grafické analýze vztahů a vazeb, provedení syntézy dat s jejich následným popisem v souhrnné zprávě – nezbytné k přijímání důležitých rozhodnutí, prevenci a ochraně proti podvodům, vzniku nedobytných pohledávek a jiných nestandardních a nežádoucích situací, včetně fatálních škod", highlight: true },
      { text: "Odhalování a dokumentace protiprávního jednání", highlight: false },
      { text: "Ochrana ekonomických zájmů fyzických a právnických osob (prověřování potenciálních obchodních partnerů, úkony související s řešením pohledávek po splatnosti, zjištění bonity dlužníka a stanovení efektivního způsobu vymáhání pohledávek, odhalování a dokumentace nekalosoutěžního jednání, atp.)", highlight: false },
      { text: "Detektivní dohled, monitorování osob a věcí, k nimž má klient právní vztah", highlight: false },
      { text: "Systematické hledání důkazů", highlight: false },
      { text: "Analýza důkazů a jejich organizace", highlight: false },
      { text: "Shromažďování podkladů (informace, důkazní materiál) pro svědectví v soudním řízení", highlight: false },
      { text: "Zajištění OTP prohlídky proti odposlechům (kanceláře, byty, auta, atp.)", highlight: false }
    ],
    footerText: "Specifikaci dalších služeb Vám poskytnu osobně.",
    sidebarTitle: "Příprava na konzultaci",
    sidebarText1: "Jakmile se rozhodnete mne kontaktovat s konkrétní poptávkou na detektivní služby, vezměte prosím v úvahu fakt, že v zájmu zvýšení efektivity práce soukromého detektiva na zakázce, je nutno dbát na provedení pečlivé přípravy.",
    sidebarText2: "Její první a nejdůležitější fází je pohovor s Vámi, při němž byste měli poskytnout maximální součinnost při předávání vstupních (prvotních) informací a neměli byste zamlčet ani zdánlivě nepodstatné informace.",
    sidebarHighlight: "Proto si prosím k případu připravte všechny dostupné podklady a informace. Předem děkuji a těším se na spolupráci."
  },
  pricing: {
    title: "Ceny služeb",
    intro: "Ceny detektivních služeb se skládají z hodinové odměny a nákladů, souvisejících s plněním Vašeho zadání (cestovní náhrady, správní a jiné obdobné poplatky, ostatní náklady, atp.). Za určitých okolností lze odměnu kombinovat s paušálem, případně i provizí.",
    hourlyTitle: "Hodinová sazba",
    hourlyDesc: "je odstupňována dle náročnosti poskytovaných služeb.",
    hourlyPriceStartText: "Cena začíná zpravidla na",
    hourlyPrice: "500",
    hourlyCurrency: "Kč",
    hourlyNote: "Vždy však záleží na dohodě s Vámi, přičemž je třeba vzít v úvahu, že výši odměny, vedle jiných specifických okolností, ovlivňuje především míra rizika podstupovaného při plnění Vašeho zadání.",
    transpTitle: "Transparentnost a kontrola nákladů",
    transpText1: "Vzhledem k tomu, že většinou nelze dopředu stanovit konečnou výši ceny detektivní služby, osvědčil se postup spočívající ve stanovení „stropu“ na tzv. prvotní šetření, abyste měli cenu za služby detektiva pod kontrolou.",
    transpText2: "Jedná se o částku, předem dohodnutou s Vámi, jež pokryje náklady na provedení prvotních úkonů, včetně přiměřené odměny detektiva. Po jejich uskutečnění, do výše dohodnutého „stropu“, je případ vyhodnocen a případně naplánovány další úkony včetně stanovení jejich předběžné ceny.",
    transpText3: "Pokud se například ukáže, že Vaše podezření se nepotvrdilo, nebo že již bylo dosaženo požadovaného účelu atp., je případ ukončen a vyhotoveno vyúčtování s příslušnou fakturou. Vy tak platíte pouze za skutečně vynaložený čas a prostředky s garancí nepřekročení sjednaného limitu."
  },
  contact: {
    email: "vladimir@profesionalnidetektiv.cz",
    phone: "+420 602 776 025"
  }
};

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
}

app.get("/api/data", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read data" });
  }
});

app.post("/api/data", (req, res) => {
  const { password, data } = req.body;
  
  if (password !== ADMIN_PASSWORD) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to write data" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
