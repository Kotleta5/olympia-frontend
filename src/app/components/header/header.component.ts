import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role: string | undefined;
  isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkIsAuthenticated();
  }

  checkIsAuthenticated() {
    this.authService.isAuthenticated().add(() => {
      if (this.authService.accessToken) {
        this.isAuthenticated = true
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.authService.accessToken = undefined;
    this.authService.role = undefined;
    this.router.navigate(['/main']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
