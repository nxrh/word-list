import { IWord } from "@/models/word";

import styles from "./Word.module.css";

export default function Word({ data }: { data: IWord }) {
  const { word, meanings } = data;
  return (
    <div className={styles.word}>
      <div>{word}</div>
      {meanings?.map?.((meaning) => (
        <div key={meaning.id}>
          <div>{meaning.partOfSpeech}</div>
          {meaning?.definitions?.map?.((definition) => (
            <div key={definition.id}>
              <div>{definition.definition}</div>
              {definition?.examples?.map?.((example) => (
                <div key={example}>{example}</div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
