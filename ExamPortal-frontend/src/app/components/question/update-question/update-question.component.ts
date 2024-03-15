import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/class/question';
import { QuizService } from 'src/app/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent implements OnInit {
  question: any;
  qid: any;
  qtitle: any;
  quesId: any;
  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quesId = this.route.snapshot.params['quesId'];

    this.questionService.getQuestion(this.quesId).subscribe(
      (data) => {
        console.log(data);
        this.question = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateSubmit() {
    this.questionService.updateQuestion(this.question).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Question is Updated', 'success').then((e) => {
          this.router.navigate(['/admin/view-quiz/']);
        });
      },
      (error) => {
        this.snackbar.open('Question could not be updated', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
