import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { PlatoInterface } from '../../models/Plato';
import { PlatoService } from '../../services/plato.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  idPlato: string;
  idUsuarioLogado: string;

  plato: PlatoInterface = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: '',
    foto: ''
  };

  constructor(
    private platoService: PlatoService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
    this.getDetallesPlato();
  }

  onComprobarUserLogin() {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      }
    });
  }

  getDetallesPlato() {
    this.idPlato = this.route.snapshot.params['id'];
    this.platoService.getOnePlato(this.idPlato).subscribe(plato => this.plato = plato);
  }

  onClickDelete() {
    console.log(this.idPlato);
    console.log(this.plato);
    if (confirm('Estas Seguro?')) {
      this.platoService.deletePlato(this.plato);
      this.router.navigate(['/DashAdmin']);
    }
  }

}
