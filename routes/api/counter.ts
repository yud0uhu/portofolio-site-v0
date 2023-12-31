import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { PhpWeb } from "https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs";

function runPhp(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const php = new PhpWeb();

    const stdoutParts: string[] = [];

    php.addEventListener("output", (evt) => {
      stdoutParts.push(evt?.["detail"]!);
    });

    php.addEventListener("ready", () => {
      php.run(code).then((exitCode: number) => {
        php.flush();

        if (exitCode !== 0) {
          reject(new Error(`PHP script returned exit code ${exitCode}`));
          return;
        }

        resolve(stdoutParts.join(""));
      });
    });
  });
}

async function createImageHTML(visit_count: number): Promise<string> {
  const digits = Array.from(visit_count.toString());
  let imageHTML = "";

  for (const digit of digits) {
    const phpOutput = await runPhp(`
    <?php
      echo '' . ${digit} . ''
    ?>`);
    imageHTML += phpOutput;
  }
  return imageHTML;
}

export default async function Handler() {
  const db = new DB("db/counter.db");
  db.query("CREATE TABLE IF NOT EXISTS counter (count INTEGER)");

  const [[count]] = db.query("SELECT COUNT(*) FROM counter");
  const countExists = Number(count) > 0;

  if (!countExists) {
    db.query("INSERT INTO counter (count) VALUES (1)");
  } else {
    db.query("UPDATE counter SET count = count + 1");
  }

  const [[visit_count]] = db.query("SELECT count FROM counter");

  const imageHTML = await createImageHTML(Number(visit_count));

  const html = `
  <html>
    <head>
    </head>
    <body>
      <p>${imageHTML}</p>
    </body>
  </html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
