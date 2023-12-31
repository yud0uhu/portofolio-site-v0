import client from "../../utils/supabaseClient.ts";

export default async function Handler() {
  const { data: accessCounterData, error } = await client
    .from("access_counter")
    .select("counts")
    .match({ id: 1 });

  if (error) {
    throw error;
  }

  if (accessCounterData && accessCounterData.length > 0) {
    const visit_count = parseInt(accessCounterData[0].counts) + 1;
    const { error: updateError } = await client
      .from("access_counter")
      .update({ counts: visit_count })
      .match({ id: 1 });

    if (updateError) {
      throw updateError;
    }

    const html = buildHTMLResponse(visit_count);

    return new Response(html, { headers: { "Content-Type": "text/html" } });
  } else {
    const visit_count = 1;
    const { error: insertError } = await client
      .from("access_counter")
      .insert({ id: 1, counts: visit_count });

    if (insertError) {
      throw insertError;
    }

    const html = buildHTMLResponse(visit_count);

    return new Response(html, { headers: { "Content-Type": "text/html" } });
  }
}

function buildHTMLResponse(visit_count: number): string {
  const html = `
      <html>
        <head>
        </head>
        <body>
          <p>${visit_count}</p>
        </body>
      </html>`;
  return html;
}
