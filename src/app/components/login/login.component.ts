import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      if (this.email === 'admin@pizza.com') {
        this.router.navigate(['/DashAdmin']);
      } else {
        this.router.navigate(['/Dashboard']);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((res) => {
      console.log(res);
      this.router.navigate(['/Dashboard']);
    }).catch( err => console.log(err.message));
  }
}
