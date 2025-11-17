export async function POST(req) {
  try {
    const { niche } = await req.json();

    const prompt = `
    Gere 5 ideias de vídeos curtos e virais para redes sociais.
    Nicho: ${niche}

    Regras:
    - Ideias práticas e fáceis de gravar.
    - Foco em engajamento alto.
    - Títulos curtos e diretos.
    - Cada ideia em uma linha.
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
        temperature: 0.75
      })
    });

    const data = await response.json();
    return Response.json({ ideas: data.choices[0].message.content });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}