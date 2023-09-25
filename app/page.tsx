import Header from "./Header";
import Word from "./Word";

export async function getData() {
  const data = [
    {
      id: "1",
      word: "cascade",
      phonetic: "",
      phonetics: [],
      meanings: [
        {
          id: "1",
          partOfSpeech: "noun",
          definitions: [
            {
              id: "1",
              definition: "a large amount of something that hangs down",
              examples: ["A cascade of golden hair fell down his back."],
            },
          ],
        },
      ],
    },
  ];

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <Header />

      <section>
        {data?.map?.((word) => (
          <Word key={word.id} data={word} />
        ))}
      </section>
    </div>
  );
}
