interface LayoutProps {
  children: preact.ComponentChildren;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div class="flex min-h-screen bg-[url('images/bg.png')] bg-cover bg-no-repeat overflow-auto font-roboto">
      <script src="https://app.embed.im/snow.js" defer></script>
      <script>
        {`
        self.addEventListener('contextmenu', function (event) {
          event.preventDefault();
          alert('右クリック禁止です！');
        });
        `}
      </script>
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
      <aside class="navbar w-370 h-750 left-[calc(50vw - 575px)] top-[calc(50vh - 375px)] fixed border-double border-4 border-black">
        <ul class="stroke-black font-bold font-san pl-16 mt-16">
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline pb-16 text-orange-stroke"
            >
              <strong>
                <span>☆　プロフィール　☆</span>
              </strong>
            </a>
          </li>
          <li class="mb-4">
            <a
              href="https://twitter.com/yud0uhu"
              class="hover:underline text-orange-stroke"
            >
              <strong>
                <span>☆　つぶやき　☆</span>
              </strong>
            </a>
          </li>
          <li class="mb-4">
            <a
              href="/bbs"
              class="hover:underline text-orange-stroke"
            >
              <strong>
                <span>☆　BBS　☆</span>
              </strong>
            </a>
          </li>

          <li class="mb-4">
            <a
              href="#"
              class="hover:underline text-orange-stroke"
            >
              <strong>
                <span>☆　LINK　☆</span>
              </strong>
            </a>
          </li>
        </ul>
      </aside>

      <main class="flex items-center justify-center font-bold h-screen overflow-auto pl-96 flex-grow">
        {children}
      </main>
    </div>
  );
}
