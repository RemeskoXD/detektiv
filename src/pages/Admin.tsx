import { useState, FormEvent, useRef, ChangeEvent } from "react";
import { useData } from "../DataContext";
import { Save, AlertCircle, CheckCircle, Download, Upload, FileJson } from "lucide-react";

export default function Admin() {
  const { data, refreshData, loading } = useData();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editData, setEditData] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (loading) {
    return <div className="p-20 text-center text-gray-500">Načítání dat...</div>;
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password) {
      setEditData(JSON.parse(JSON.stringify(data)));
      setIsAuthenticated(true);
    }
  };

  const handleSave = async (dataToSave = editData) => {
    setStatus("saving");
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, data: dataToSave }),
      });
      
      if (!response.ok) {
        throw new Error("Neplatné heslo nebo chyba serveru");
      }
      
      setStatus("success");
      await refreshData();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(editData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "zaloha-data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target?.result as string);
        setEditData(importedData);
        // Volitelně můžeme rovnou uložit po importu:
        // handleSave(importedData);
      } catch (err) {
        setStatus("error");
        setErrorMsg("Neplatný soubor JSON");
        setTimeout(() => setStatus("idle"), 3000);
      }
    };
    reader.readAsText(file);
  };


  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
        <h1 className="text-2xl font-serif mb-6 text-ink text-center">Administrace</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Heslo</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-ink text-white py-2 rounded-lg hover:bg-accent transition-colors"
          >
            Přihlásit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 bg-white shadow-xl rounded-2xl border border-gray-100 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b pb-4">
        <h1 className="text-3xl font-serif text-ink">Úprava textů</h1>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Download className="w-4 h-4" />
            Zálohovat
          </button>
          
          <input 
            type="file" 
            accept=".json" 
            ref={fileInputRef} 
            onChange={handleImport} 
            className="hidden" 
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Nahrát zálohu
          </button>

          <button
            onClick={() => handleSave(editData)}
            disabled={status === "saving"}
            className="flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 disabled:opacity-50 transition-colors"
          >
            <Save className="w-4 h-4" />
            {status === "saving" ? "Ukládání..." : "Uložit změny"}
          </button>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Změny byly úspěšně uloženy.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Chyba při ukládání: {errorMsg}
        </div>
      )}

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4">Hlavní strana (Hero sekce)</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nadpis (oddělte řádky Enterem)</label>
              <textarea
                value={editData.heroTitle}
                onChange={(e) => setEditData({ ...editData, heroTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Popis</label>
              <textarea
                value={editData.heroDescription}
                onChange={(e) => setEditData({ ...editData, heroDescription: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4">Kvalifikace (Prezentace)</h2>
          <div className="space-y-6">
            {editData.certificates.map((cert: any, index: number) => (
              <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Název</label>
                    <input
                      type="text"
                      value={cert.title}
                      onChange={(e) => {
                        const newCerts = [...editData.certificates];
                        newCerts[index].title = e.target.value;
                        setEditData({ ...editData, certificates: newCerts });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Odkaz (URL) - nepovinné</label>
                    <input
                      type="text"
                      value={cert.link || ""}
                      onChange={(e) => {
                        const newCerts = [...editData.certificates];
                        newCerts[index].link = e.target.value;
                        setEditData({ ...editData, certificates: newCerts });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Popis</label>
                    <textarea
                      value={cert.description}
                      onChange={(e) => {
                        const newCerts = [...editData.certificates];
                        newCerts[index].description = e.target.value;
                        setEditData({ ...editData, certificates: newCerts });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg h-20"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4">O mně</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cílový text 1 (První odstavec)</label>
              <textarea
                value={editData?.about?.text1 || ""}
                onChange={(e) => setEditData({ ...editData, about: { ...editData.about, text1: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cílový text 2 (Druhý odstavec)</label>
              <textarea
                value={editData?.about?.text2 || ""}
                onChange={(e) => setEditData({ ...editData, about: { ...editData.about, text2: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4">Nabídka služeb</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Úvodní text pod nadpisem</label>
              <textarea
                value={editData?.services?.subtitle || ""}
                onChange={(e) => setEditData({ ...editData, services: { ...editData.services, subtitle: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-16"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Text bočního panelu (Příprava na konzultaci)</label>
              <textarea
                value={editData?.services?.sidebarText1 || ""}
                onChange={(e) => setEditData({ ...editData, services: { ...editData.services, sidebarText1: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 mb-2"
              />
              <textarea
                value={editData?.services?.sidebarText2 || ""}
                onChange={(e) => setEditData({ ...editData, services: { ...editData.services, sidebarText2: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4">Kontakt</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  value={editData?.contact?.email || ""}
                  onChange={(e) => setEditData({ ...editData, contact: { ...editData.contact, email: e.target.value } })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="text"
                  value={editData?.contact?.phone || ""}
                  onChange={(e) => setEditData({ ...editData, contact: { ...editData.contact, phone: e.target.value } })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-medium mb-4">Ceny služeb</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hodinová sazba (od)</label>
                <input
                  type="text"
                  value={editData?.pricing?.hourlyPrice || ""}
                  onChange={(e) => setEditData({ ...editData, pricing: { ...editData.pricing, hourlyPrice: e.target.value } })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Měna</label>
                <input
                  type="text"
                  value={editData?.pricing?.hourlyCurrency || ""}
                  onChange={(e) => setEditData({ ...editData, pricing: { ...editData.pricing, hourlyCurrency: e.target.value } })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Úvodní text</label>
              <textarea
                value={editData?.pricing?.intro || ""}
                onChange={(e) => setEditData({ ...editData, pricing: { ...editData.pricing, intro: e.target.value } })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            <div className="flex items-center gap-2">
              <FileJson className="w-5 h-5 text-gray-500" />
              <h2 className="text-xl font-medium m-0">Pokročilé úpravy (JSON Editor)</h2>
            </div>
            <span className="text-gray-500">{showAdvanced ? "Skrýt" : "Zobrazit"}</span>
          </div>
          
          {showAdvanced && (
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-4">
                Zde můžete upravovat kompletní data webu. Dávejte pozor na správné formátování (JSON).
              </p>
              <textarea
                value={JSON.stringify(editData, null, 2)}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value);
                    setEditData(parsed);
                  } catch (err) {
                    // Ignore parsing errors while typing
                  }
                }}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg font-mono text-sm h-96 bg-gray-900 text-green-400"
                spellCheck="false"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
