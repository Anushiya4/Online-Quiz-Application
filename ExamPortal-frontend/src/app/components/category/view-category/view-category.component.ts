import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  categories: any;

  constructor(private categoryService: CategoryService,private router:Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!', 'server loading error', 'error');
      }
    );
  }

  deleteCategory(cid: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure you want to delete?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(cid).subscribe(
          (data) => {
            this.ngOnInit();
            Swal.fire('Success!', 'Category Deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'server loading error', 'error');
          }
        );
      }
    });
  }
  updateCategory(cid: any) {
    this.router.navigate(['/admin/update-category/',cid]);
  }
}
