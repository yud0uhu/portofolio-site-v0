import Form from "../../islands/Form.tsx";

export default function Bbs() {
  return (
    <div class="flex min-h-screen bg-[url('images/bg.png')] bg-cover bg-no-repeat overflow-auto font-roboto">
      <script src="https://app.embed.im/snow.js" defer></script>
      <script>
        {
          /* {`
        self.addEventListener('contextmenu', function (event) {
          event.preventDefault();
          alert('右クリック禁止です！');
        });
        `} */
        }
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
      <main class="flex items-center justify-center font-bold h-screen overflow-auto pl-96 flex-grow">
        <Form />
      </main>
    </div>
  );
}
