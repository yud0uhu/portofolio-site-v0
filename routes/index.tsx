import Counter from "../islands/Counter.tsx";

export default function Home(count: string) {
  return (
    <div className="flex min-h-screen bg-[url('images/bg.png')] bg-cover bg-no-repeat overflow-auto font-roboto">
      <script src="https://app.embed.im/snow.js" defer></script>
      <style>
        {`
        .text-orange-stroke {
          color: #C26666;
          font-style: italic;
          text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        }
        .navbar {
          width: 370px;
          height: 750px;
          left: calc(50vw - 575px);
          top: calc(50vh - 375px);
          position: fixed;
        }
        `}
      </style>
      <aside className="navbar w-370 h-750 left-[calc(50vw - 575px)] top-[calc(50vh - 375px)] fixed border-double border-4 border-black">
        <ul className="stroke-black font-bold font-san pl-16 mt-16">
          <li className="mb-4">
            <a
              href="#"
              className="hover:underline pb-16 text-orange-stroke"
            >
              <strong>
                <span>☆　プロフィール　☆</span>
              </strong>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://twitter.com/yud0uhu"
              className="hover:underline text-orange-stroke"
            >
              <strong>
                <span>☆　つぶやき　☆</span>
              </strong>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="hover:underline text-orange-stroke"
            >
              <strong>
                <span>☆　BBS　☆</span>
              </strong>
            </a>
          </li>

          <li className="mb-4">
            <a
              href="#"
              className="hover:underline text-orange-stroke"
            >
              <strong>
                <span>☆　LINK　☆</span>
              </strong>
            </a>
          </li>
        </ul>
      </aside>
      <main className="flex items-center justify-center font-bold h-full overflow-auto pl-96 flex-grow">
        <div className="flex flex-col items-center font-sans relative text-orange-stroke border-l border-r border-black max-w-2xl h-screen py-16 px-16 mx-32">
          <marquee
            className="text-3xl"
            style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
          >
            {"☆　ようこそ！おゆのホームページへ　☆".split("").map(
              (character, index) => {
                const animations = [
                  "animate-marquee",
                  "animate-marquee2",
                  "animate-marquee3",
                ];
                return (
                  <span className={animations[index % 3]}>{character}</span>
                );
              },
            )}
          </marquee>
          <p>
            あなたは
          </p>
          <Counter />
          <p className="mb-16">
            人目の訪問者です
          </p>
          <img src="images/tukimisoba1110.gif"></img>
          <div className="m-3 mt-0 mb-4 p-1 w-full">
            <strong>
              <span>
                ☆　キリ番踏み逃げ禁止です！BBSに記念カキコしてね！　☆
              </span>
            </strong>
          </div>

          <div className="border-double border-4 border-black">
            <table className="w-full text-center">
              <tr>
                <td className="border-double border border-black p-2">
                  プロフィール
                </td>
                <td className="border-double border border-black p-2">
                  管理人のプロフィールです！
                </td>
              </tr>
              <tr>
                <td className="border-double border border-black p-2">
                  つぶやき
                </td>
                <td className="border-double border border-black p-2">
                  管理人のつぶやきです！
                </td>
              </tr>
              <tr>
                <td className="border-double border border-black p-2">BBS</td>
                <td className="border-double border border-black p-2">
                  キリ番を踏んだ人はここに書き込んでください！
                </td>
              </tr>
              <tr>
                <td className="border-double border border-black p-2">LINK</td>
                <td className="border-double border border-black p-2">
                  素敵サイトさまへのリンクです
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-16">
            <audio controls loop autoPlay>
              <source src="audio/maou_game_orgel04.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
              </source>
            </audio>
          </div>
          <div className="update-history border-double border-4 border-black p-4 mt-8">
            <h2 className="text-orange-stroke font-bold text-2xl mb-4">
              更新履歴
            </h2>
            <ul>
              <li>2023/12/31: ホームページを公開しました。</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
