import { Category } from './category';
export class Quiz {
  qid:any;
  title: any;
  description: any;
  maxMarks: any;
  numberOfQuestions: any;
  active: any;
  category: Category = new Category();
}
