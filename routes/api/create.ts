import { PhpWeb } from "https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs";
import { Handlers } from "$fresh/server.ts";
import client from "../../utils/supabaseClient.ts";

type Args = {
  title: string;
  name: string;
  comment: string;
  pass: number;
};

const php = new PhpWeb();
php.addEventListener("ready", () => console.log("PHP is ready!"));

await new Promise((resolve) => {
  php.addEventListener("ready", resolve);
});

export const handler: Handlers<Args> = {
  async POST(req) {
    const formData = await req.formData();
    const title = formData.get("title")?.toString() || "";
    const name = formData.get("name")?.toString() || "";
    const comment = formData.get("comment")?.toString() || "";
    const pass = Number(formData.get("pass"));

    const { data } = await client.from("bbs").insert([
      { name: name, comment, title, pass },
    ])
      .select();

    console.log(data);

    return new Response("", {
      status: 303,
      headers: { Location: "/bbs" },
    });
  },
};
