import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instuctions-of-quiz',
  templateUrl: './instuctions-of-quiz.component.html',
  styleUrls: ['./instuctions-of-quiz.component.css'],
})
export class InstuctionsOfQuizComponent implements OnInit {
  qid: any;
  quiz: any;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.quizService.getQuiz(this.qid).subscribe((data) => {
      this.quiz = data;
    });
  }
  startQuiz() {
    Swal.fire({
      title: 'Do you want to start the Quiz?',
      showDenyButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't start`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/quizStart/' + this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
