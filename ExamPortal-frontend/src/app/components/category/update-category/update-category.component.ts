import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from './../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  categories: any;
  cid: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cid = this.route.snapshot.params['cid'];
    this.categoryService.getCategory(this.cid).subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }
  updateCategory() {
    if (this.categories.title.trim() == '' || this.categories.title == null) {
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }
    if (
      this.categories.description.trim() == '' ||
      this.categories.description == null
    ) {
      this.snackbar.open('Description is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }
    this.categoryService.updateCategory(this.categories).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Category is Updated', 'success').then((e) => {
          this.router.navigate(['/admin/view-category']);
        });
      },
      (error) => {
        this.snackbar.open('Category could not be updated', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
