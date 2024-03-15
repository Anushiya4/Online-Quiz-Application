import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  listItems = [
    { linkTitle: 'Home ', link: '/admin/home', icon: 'home' },
    { linkTitle: 'Category', link: '/admin/view-category', icon: 'category' },
    {
      linkTitle: 'Add Category',
      link: '/admin/add-category',
      icon: 'category',
    },
    { linkTitle: 'Quizzes', link: '/admin/view-quiz', icon: 'list' },
    { linkTitle: 'Add Quiz', link: '/admin/add-quiz', icon: 'add' },
  ];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
}
