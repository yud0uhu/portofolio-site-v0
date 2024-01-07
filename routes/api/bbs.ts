import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { PhpWeb } from "https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs";
import { Handlers } from "$fresh/server.ts";

const SUPABASE_SECRET_KEY = Deno.env.get("SUPABASE_SECRET_KEY");

const client = createClient(
  "https://quepzvpqdaudlmrjyxee.supabase.co",
  SUPABASE_SECRET_KEY,
);

interface Args {
  comments: string;
}

const php = new PhpWeb();
php.addEventListener("ready", () => console.log("PHP is ready!"));
await new Promise((resolve) => {
  php.addEventListener("ready", resolve);
});

function runPhp(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const stdoutParts: string[] = [];
    php.addEventListener("output", (evt) => {
      stdoutParts.push(evt?.["detail"]!);
    });
    php.run(code).then((exitCode: number) => {
      php.flush();
      if (exitCode !== 0) {
        reject(new Error(`PHP script returned exit code ${exitCode}`));
        return;
      }
      resolve(stdoutParts.join(""));
    });
  });
}

export const handler: Handlers<Args> = {
  async GET() {
    const { data } = await client.from("bbs").select();

    const comments = await runPhp(JSON.stringify(data));
    return new Response(
      JSON.stringify({ comments }),
      {
        status: 200,
        statusText: "OK",
        headers: { "content-type": "application/json" },
      },
    );
  },
};
