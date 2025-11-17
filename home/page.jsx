import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      <div style={{ padding: "24px" }}>
        <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
          Ferramentas Principais
        </h1>

        <div style={{ marginTop: 24 }}>
          <ToolCard
            title="✨ Gerador de Roteiros"
            description="Crie roteiros curtos, chamativos e profissionais."
            onClick={() => router.push("/tools/script")}
          />

          <ToolCard
            title="🔥 Gerador de Legendas"
            description="Legendas naturais, modernas e que convertem."
            onClick={() => router.push("/tools/caption")}
          />

          <ToolCard
            title="🎯 Ideias de Vídeos"
            description="Gere ideias virais e fáceis de gravar para o seu nicho."
            onClick={() => router.push("/tools/ideas")}
          />
        </div>
      </div>
    </main>
  );
}