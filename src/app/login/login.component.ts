import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}
 
 loginForm = this.formBuilder.group({
  username: ['', Validators.required],
  password: ['', Validators.required],
 });

 onSubmit(){
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    const {username, password} = this.loginForm.value;

    if (username && password) {
      this.router.navigate(['/results']);
      this.authService.login({username, password}).subscribe({
        next: (response: any) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/results']);
          }
        },
        error: (err: Error) => {
          console.error(err);
        }
      })
    }
  }
 }
}
