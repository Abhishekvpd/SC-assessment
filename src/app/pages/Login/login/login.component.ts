import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { authToken } from 'src/app/core/utils/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submitHandler() {
    this.authService.userLogin(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', authToken);
        // if (response) this.router.navigate(['client']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
