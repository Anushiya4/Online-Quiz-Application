import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Category } from 'src/app/class/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categories :Category=new Category;

  constructor(
    private categoryService: CategoryService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.categories.title.trim() == '' || this.categories.title == null) {
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }

    this.categoryService.addCategory(this.categories).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Category is created', 'success').then((e) => {
          this.router.navigate(['/admin/view-category']);
        });
      },
      (error) => {
        this.snackbar.open('Category could not be created', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
