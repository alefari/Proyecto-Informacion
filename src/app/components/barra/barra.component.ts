import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {
  public userNombre: string;
  public userEmail: string;
  public userPicture: string;
  public userId: string;
  public isLogin: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  comprobarUserLogin() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        console.log(auth);
      }
    });
  }

  cerrarSesion() {
    this.authService.logout();
  }

}
