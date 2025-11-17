export async function POST(req) {
  try {
    const { topic } = await req.json();

    const prompt = `
    Crie um roteiro curto, objetivo e impactante para vídeo de redes sociais.
    Tema: ${topic}
    Formato: frases curtas, ritmo rápido, linguagem moderna.
    Entregue com começo chamativo, meio explicativo e final com CTA sutil.
    `;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    return Response.json({ script: data.choices[0].message.content });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}