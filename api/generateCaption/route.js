export async function POST(req) {
  try {
    const { topic } = await req.json();

    const prompt = `
    Gere uma legenda moderna, envolvente e natural para um post de redes sociais.
    Tema: ${topic}
    Regras:
    - Linguagem leve e atual.
    - Não usar frases forçadas.
    - Início chamativo.
    - Final com CTA natural (ex: "me segue pra mais").
    - Não ultrapassar 3 linhas.
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
        temperature: 0.8
      })
    });

    const data = await response.json();
    return Response.json({ caption: data.choices[0].message.content });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}