import {
  ExampleCodeType,
  QuestionType,
  TextLessonType
} from '../types/apps/ActivitiesTypes';
type ElementsLesson = (QuestionType | ExampleCodeType | TextLessonType)[];

export class Lesson {
  private readonly elements: ElementsLesson = [];
  constructor(elements: ElementsLesson) {
    this.elements = elements;
  }

  get listElements(): ElementsLesson {
    return this.elements;
  }
}
