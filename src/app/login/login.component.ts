import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().add(() => {
      if (this.authService.role === 'admin') {
        this.router.navigate(['admin'])
      } else if (this.authService.role === 'judger') {
        this.router.navigate(['judger']);
      }
    });
  }

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authenticateUser(username, password);
    }
  }

  private authenticateUser(username: string | null | undefined, password: string | null | undefined) {
    if (username && password) {
      this.authService.login({ username, password }).add(() => {
        if (this.authService.accessToken && this.authService.role === 'admin') {
          this.router.navigate(['admin'])
        } else if (this.authService.accessToken && this.authService.role === 'judger') {
          this.router.navigate(['judger']);
        } else {
          alert('Login failed. Please try again');
        }
      })
    }
  }
}
