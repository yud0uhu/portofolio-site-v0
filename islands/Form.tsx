import { useEffect, useState } from "preact/hooks";

interface Post {
  id: number;
  created_at: string;
  name: string;
  comment: string;
  user_id: string;
}

export default function Form() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [pass, setPass] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/bbs");
        if (!response.ok) {
          console.error(`Error: HTTP ${response.status}`);
          return;
        }

        const jsonResponse = await response.json();
        const parsedComments = JSON.parse(jsonResponse.comments);
        setPosts(parsedComments);
      } catch (error) {
        console.error(error);
      }
    })().catch((error) => console.error(error));
  }, []);

  return (
    <div class="flex flex-col items-center font-sans relative text-stroke border-l border-r border-black max-w-2xl h-screen py-16 px-16 mx-32">
      {posts.map((msg, index) => (
        <div key={index} class="mb-4 rounded p-2">
          <p class="">
            {index + 1} 名前: {msg.name}{" "}
            ★ ：{new Date(msg.created_at).toLocaleString()} ID: {msg.user_id}
            <br />
            {msg.comment}
          </p>
        </div>
      ))}
      <form
        method="POST"
        action="/api/create"
      >
        <input type="hidden" name="bbs" value="rmovie" />
        <input type="hidden" name="key" value="1421226996" />
        <input type="hidden" name="time" value="1704324198" />
        <input
          type="submit"
          value="書き込む"
          name="submit"
          class="px-4 py-2 text-base font-medium rounded-md text-white bg-[#C26666] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        />
        <label>
          名前：<input
            name="name"
            size={19}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            class="py-2 px-4 mb-3 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
        <label>
          タイトル：<input
            name="title"
            size={19}
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            class="py-2 px-4 mb-3 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label>
          パスワード：<input
            name="password"
            type="password"
            size={4}
            value={pass}
            onChange={(e) => setPass(e.currentTarget.value)}
            class="py-2 px-4 mb-3 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
        <textarea
          rows={5}
          cols={64}
          wrap="OFF"
          name="MESSAGE"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
          class="text-black w-full py-2 px-4 mb-3 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
          style={{
            background:
              "url('//2ch.sc/NewYearIllust/5.svgz') center center / contain no-repeat",
          }}
        >
        </textarea>
      </form>
    </div>
  );
}
