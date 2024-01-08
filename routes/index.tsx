import Counter from "../islands/Counter.tsx";
import Layout from "../islands/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <div class="flex flex-col items-center font-sans relative text-orange-stroke border-l border-r border-black max-w-2xl h-screen py-16 px-16 mx-32">
        <div class="flex flex-col items-center">
          <div class="marquee-container text-3xl">
            <marquee
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
                    <span
                      class={`inline-block ${animations[index % 3]}`}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      {character}
                    </span>
                  );
                },
              )}
            </marquee>
          </div>
        </div>
        <p>
          あなたは
        </p>
        <Counter />
        <p class="mb-16">
          人目の訪問者です
        </p>
        <img src="images/tukimisoba1110.gif"></img>
        <div class="m-3 mt-0 mb-4 p-1 w-full">
          <strong>
            <span>
              ☆　キリ番踏み逃げ禁止です！BBSに記念カキコしてね！　☆
            </span>
          </strong>
        </div>

        <div class="border-double border-4 border-black">
          <table class="w-full text-center">
            <tr>
              <td class="border-double border border-black p-2">
                プロフィール
              </td>
              <td class="border-double border border-black p-2">
                管理人のプロフィールです！
              </td>
            </tr>
            <tr>
              <td class="border-double border border-black p-2">
                つぶやき
              </td>
              <td class="border-double border border-black p-2">
                管理人のつぶやきです！
              </td>
            </tr>
            <tr>
              <td class="border-double border border-black p-2">BBS</td>
              <td class="border-double border border-black p-2">
                キリ番を踏んだ人はここに書き込んでください！
              </td>
            </tr>
            <tr>
              <td class="border-double border border-black p-2">LINK</td>
              <td class="border-double border border-black p-2">
                素敵サイトさまへのリンクです
              </td>
            </tr>
          </table>
        </div>
        <div class="mt-16">
          <audio controls loop autoPlay>
            <source src="audio/maou_game_orgel04.mp3" type="audio/mp3">
              Your browser does not support the audio tag.
            </source>
          </audio>
        </div>
        <div class="update-history border-double border-4 border-black p-4 mt-8">
          <h2 class="text-orange-stroke font-bold text-2xl mb-4">
            更新履歴
          </h2>
          <ul>
            <li>2023/12/31: ホームページを公開しました。</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
