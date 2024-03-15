import { Quiz } from './quiz';

export class Question {
  quesId: any;
  content: any;
  option1: any;
  option2: any;
  option3: any;
  option4: any;
  answer: any;
  quiz: Quiz = new Quiz();
}
