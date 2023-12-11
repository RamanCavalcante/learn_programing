import {
  ExampleCodeType,
  QuestionType,
  LessonTextType
} from '../types/apps/ActivitiesTypes';
type ElementsLesson = (QuestionType | ExampleCodeType | LessonTextType)[];

export class Lesson {
  private readonly elements: ElementsLesson = [];
  constructor(elements: ElementsLesson) {
    this.elements = elements;
  }

  get listElements(): ElementsLesson {
    return this.elements;
  }
}
