import { useEffect, useState } from "preact/hooks";

export default function Counter() {
  const [counterContent, setCounterContent] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/counter");

        if (!response.ok) {
          console.error(`Error: HTTP ${response.status}`);
          return;
        }

        const htmlResponse = await response.text();

        const match = /<p>([\s\S]*?)<\/p>/i.exec(htmlResponse);
        const contentInsidePTag = match ? match[1] : "";
        setCounterContent(contentInsidePTag);
      } catch (error) {
        console.error(error);
      }
    })().catch((error) => console.error(error));
  }, []);

  const counterArray = counterContent.split("");

  return (
    <div className="flex flex-row justify-center">
      {counterArray.map((num, index) =>
        num.trim() !== ""
          ? (
            <span
              key={index}
              className={`${
                index < counterArray.length - 1 ? "mr-1" : ""
              } text-2xl bg-black text-white px-5 py-2 font-bold`}
            >
              {num}
            </span>
          )
          : null
      )}
    </div>
  );
}
