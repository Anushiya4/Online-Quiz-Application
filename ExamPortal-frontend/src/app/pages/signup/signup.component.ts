import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'student'
    //role: 'admin'
  };
  constructor(
    private userService: UserService,
    private _snackbar: MatSnackBar,
    private route:Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this._snackbar.open('Username is required', 'ok', {
        duration: 4000,
      });
      return;
    }

    this.userService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'User is registered', 'success');
        this.route.navigate(["/login"])

      },
      (error) => {
        this._snackbar.open('Username already exists', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
