export interface IWord {
  id: string;
  word: string;
  phonetic: string;
  phonetics: IPhonetics[];
  meanings: IMeaning[];
}

export interface IPhonetics {
  id: string;
  text: string;
  audio: string;
}

export interface IMeaning {
  id: string;
  partOfSpeech: string;
  definitions: IDefinition[];
}

export interface IDefinition {
  id: string;
  definition: string;
  examples: string[];
}
