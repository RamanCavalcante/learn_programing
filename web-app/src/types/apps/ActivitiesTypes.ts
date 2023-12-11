export enum EnumLessonType {
  ItemQuestion,
  ItemExampleCode,
  ItemText
}

export type QuestionOptionType = {
  answer: string;
  obs: string;
  value: boolean;
};

export type QuestionType = {
  query: string;
  options: QuestionOptionType[];
  selected_index: number;
  typeItem: 'ItemQuestion';
};

export type ExampleCodeType = {
  content: string;
  typeItem: 'ItemExampleCode';
};

export type LessonTextType = {
  content: string;
  typeItem: 'ItemText';
};

export type LessonType = QuestionType | ExampleCodeType | LessonTextType;

export type ActivitiesDataType = {
  activities: ItemActivity[];
};

export type ItemActivity = {
  title: string;
  lessons: LessonType[];
  order: number;
  done: boolean;
};
