import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  categories: any;

  // listItems = [
  //   { linkTitle: 'Home ', link: '/user', icon: 'home' },
  //   { linkTitle: 'All Quizzes', icon: 'account_circle' },
  // ];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
