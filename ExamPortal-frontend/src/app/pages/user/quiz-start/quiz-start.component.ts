import { LocationStrategy } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css'],
})
export class QuizStartComponent implements OnInit {
  qid: any;
  questions: any;
  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;
  maximumMarks = 0;
  isSubmit = false;
  timer: any;
  counter: any;
  interval: any;
  value: any;
  test: number = 0;
  constructor(
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.preventBackButton();
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getQuestionsOfQuizForUser(this.qid).subscribe(
      (data) => {
        this.questions = data;
        console.log(this.questions);

        this.questions.forEach((ques: any) => {
          ques['givenAnswer'] = '';
        });
        this.startTimer();
      },
      (error) => {}
    );
  }
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',

      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.evaluateQuiz();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
  evaluateQuiz() {
    this.isSubmit = true;
    this.value = this.timer;
    this.questions.forEach((ques: any) => {
      if (ques.givenAnswer == ques.answer) {
        this.correctAnswer++;
        this.maximumMarks = this.questions[0].quiz.maxMarks;
        let eachQuestionMark = this.maximumMarks / this.questions.length;
        this.marksGot += eachQuestionMark;
      }
      if (ques.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });
  }
  startTimer() {
    this.timer = 303;
    const exist = localStorage.getItem('counter');
    if (exist) {
      if (parseInt(exist) <= 0) {
        this.value = this.timer;
      } else {
        this.value = localStorage.getItem('counter');
      }
    } else {
      this.value = this.timer;
    }

    this.counter = function () {
      if (this.value <= 0) {
        localStorage.setItem('counter', this.timer);
        clearInterval(this.interval);

        this.evaluateQuiz();
      } else {
        this.value = parseInt(this.value) - 1;
        localStorage.setItem('counter', this.value);
      }
    };

    this.interval = setInterval(() => {
      this.counter();
    }, 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.value / 60);
    let ss = this.value - mm * 60;

    return `${mm} min : ${ss} sec`;
  }
  print() {
    window.print();
  }
}
