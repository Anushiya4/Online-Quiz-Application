import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LoginService } from './../../services/login.service';

import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isLoggedIn = false;
  user: any;
  isNormal: any;
  isAdmin: any;
  constructor(
    public loginService: LoginService,
    private observer: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    });
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }
}