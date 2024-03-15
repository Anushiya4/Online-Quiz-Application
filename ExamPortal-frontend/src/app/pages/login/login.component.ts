import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snackBar.open('Username is required !', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snackBar.open('Password is required !', '', {
        duration: 3000,
      });
      return;
    }

    const body = {
      username: this.loginData.username,
      password: this.loginData.password
    };

    this.loginService.signIn(body).pipe(take(1)).subscribe((res: any) => {
      if (res && res?.id) {
        this.loginService.loginUser(res?.id);
        this.loginService.setUser(res)
        console.log("####", res);
        console.log('****', this.loginService.getUserRole());
       ;
        if (this.loginService.getUserRole() == 'admin') {
          this.router.navigate(['admin/home']);
          this.loginService.loginStatusSubject.next(true);
        } else if (this.loginService.getUserRole() == 'student') {
          this.router.navigate(['user/all']);

          this.loginService.loginStatusSubject.next(true);
        } else {
          this.loginService.logout();
          //location.reload();
        }
      }
    },
    (error) => {
      console.log(error);
      this.snackBar.open('Invalid Credentials! Try again', '', {
        duration: 3000,
      });
    });

   /* this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);

          if (this.loginService.getUserRole() == 'admin') {
            this.router.navigate(['admin/home']);
            this.loginService.loginStatusSubject.next(true);
          } else if (this.loginService.getUserRole() == 'normal') {
            this.router.navigate(['user/all']);

            this.loginService.loginStatusSubject.next(true);
          } else {
            this.loginService.logout();
            //location.reload();
          }
        });
      },
      (error) => {
        console.log(error);
        this.snackBar.open('Invalid Credentials! Try again', '', {
          duration: 3000,
        });
      }
    ); */
  }
}
