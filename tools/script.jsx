"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ScriptTool() {
  const [nicho, setNicho] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    if (!nicho || !objetivo) {
      alert("Preencha o nicho e o objetivo!");
      return;
    }

    setLoading(true);

    // Aqui entraremos com a IA real depois
    setTimeout(() => {
      setResult(
        `🔥 ROTEIRO GERADO\n\nNicho: ${nicho}\nObjetivo: ${objetivo}\n\n1️⃣ Comece com uma frase forte.\n2️⃣ Mostre a transformação.\n3️⃣ Finalize com CTA sutil.`
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <Navbar />

      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: "bold" }}>
          ✨ Gerador de Roteiros
        </h1>

        <div style={{ marginTop: 24 }}>
          <label>Nicho</label>
          <input
            value={nicho}
            onChange={(e) => setNicho(e.target.value)}
            placeholder="Ex: emagrecimento, humor, marketing…"
            style={{
              width: "100%",
              padding: 12,
              marginTop: 6,
              borderRadius: 8,
            }}
          />

          <label style={{ marginTop: 18, display: "block" }}>Objetivo</label>
          <input
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            placeholder="Ex: gerar vendas, criar conexão…"
            style={{
              width: "100%",
              padding: 12,
              marginTop: 6,
              borderRadius: 8,
            }}
          />

          <button
            onClick={generateScript}
            disabled={loading}
            style={{
              width: "100%",
              marginTop: 24,
              padding: 14,
              backgroundColor: "#9333EA",
              borderRadius: 10,
              fontWeight: "bold",
              color: "#fff",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Gerando..." : "Gerar Roteiro"}
          </button>
        </div>

        {result && (
          <div
            style={{
              marginTop: 30,
              padding: 16,
              backgroundColor: "#111",
              borderRadius: 10,
              whiteSpace: "pre-line",
            }}
          >
            {result}
          </div>
        )}
      </div>
    </main>
  );
}