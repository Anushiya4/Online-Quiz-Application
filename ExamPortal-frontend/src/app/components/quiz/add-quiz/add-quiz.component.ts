import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/class/quiz';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories: any;
  quiz: Quiz = new Quiz();
  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!', 'server loading error', 'error');
      }
    );
  }
  formSubmit() {
    if (this.quiz.title.trim() == '' || this.quiz.title == null) {
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }

    this.quizService.addQuiz(this.quiz).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Quiz is created', 'success').then((e) => {
          this.router.navigate(['/admin/view-quiz']);
        });
      },
      (error) => {
        this.snackbar.open('Quiz could not be created', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
