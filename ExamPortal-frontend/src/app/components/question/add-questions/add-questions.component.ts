import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/class/question';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
})
export class AddQuestionsComponent implements OnInit {
  

  question: Question = new Question();
  qid: any;
  qtitle: any;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['qtitle'];
    this.question.quiz['qid'] = this.qid;
  }

  questionSubmit() {
    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.option3.trim() == '' || this.question.option3 == null) {
      return;
    }
    if (this.question.option4.trim() == '' || this.question.option4 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }

    this.questionService.addQuestion(this.question).subscribe(
      (data) => {
        Swal.fire('Done', 'Question is created', 'success').then((e) => {
          this.router.navigate([
            '/admin/view-question/',
            this.qid,
            this.qtitle,
          ]);
        });
      },
      (error) => {
        Swal.fire('Error', 'Error in Loading', 'error');
      }
    );
  }
}
