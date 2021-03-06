import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/authservice.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;
  welcomeUsername: string;
  welcomeRole: string;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {
    this.authService.welcomeUser.subscribe((value) => {
      this.welcomeUsername = value;
    });
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('Logged in succesfully');
      },
      (error) => {
        this.alertify.error('Usuario o contraseña incorrecta');
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
