import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserManagementService } from 'src/app/services/user-management.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})
export class AdminSectionComponent implements OnInit {
  panelOpenState = false;
  readonly displayedColumns: string[] = ['id', 'username', 'password', 'role'];
  userAccounts: User[] = [];
  username: string = '';
  password: string = '';
  role: string = 'judger';

  constructor(private userManagementService: UserManagementService, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().add(() => this.authService.accessToken !== undefined && this.authService.role === 'admin'?
     this.getUsers() :
     this.router.navigate(['/login']) );
  }

  createJudgerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  onSubmit() {
    if (this.createJudgerForm.valid) {
      const { username, password, role } = this.createJudgerForm.value;

      if (username && password && role) {
        this.userManagementService.registerUser({ username, password, role }).subscribe({
          next: () => {
            alert('Successfully created');
            this.getUsers();
          }, error: (err) => {
            alert(err.message);
            this.router.navigate(['/login']);
          }
        });
      }
    }
  }

  getUsers() {
    this.userManagementService.getUserAccounts().add(() => this.userAccounts = this.userManagementService.userAccounts)
  }

}
