export enum ElementType {
  ItemQuestion,
  ItemExampleCode,
  ItemText
}

export type QuestionType = {
  typeItem: ElementType.ItemQuestion;
  query: string;
  options: OptionType[];
  selected_index: number;
};

export type OptionType = {
  answer: string;
  value: boolean;
  obs: string;
};

export type ExampleCodeType = {
  typeItem: ElementType.ItemExampleCode;
  content: string;
};

export type TextLessonType = {
  typeItem: ElementType.ItemText;
  content: string;
};

export type LessonType = {
  elements: (OptionType | ExampleCodeType | TextLessonType)[];
};
