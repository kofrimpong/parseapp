import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/routes/auth.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new UserModel();
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model.email, this.model.password).then(success => {
      if (success) {
        if (this.authService.redirectUrl) {
          let redirect = this.authService.redirectUrl;
          this.router.navigate([redirect[0]], redirect[1]);
        }
        else {
          this.router.navigate(['/event']);
        }
      }
    }).catch(error => {
      this.errorMsg = error.message;
    });
  }
}
