import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './../../../services/quiz.service';

@Component({
  selector: 'app-load-all-quiz',
  templateUrl: './load-all-quiz.component.html',
  styleUrls: ['./load-all-quiz.component.css'],
})
export class LoadAllQuizComponent implements OnInit {
  cid: any;
  quizzes: any;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cid = params['cid'];
      if (this.cid == 'all') {
        this.quizService.getActiveQuizzes().subscribe(
          (data) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('Could not load');
          }
        );
      } else {
        this.quizService.getActiveQuizzesOfCategory(this.cid).subscribe((data) => {
          this.quizzes = data;
        });
      }
    });
  }
}
