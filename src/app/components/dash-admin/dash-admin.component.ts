import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatoInterface } from '../../models/Plato';
import { PlatoService } from '../../services/plato.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.scss']
})
export class DashAdminComponent implements OnInit {
  platos: PlatoInterface[];

  idPlato: string;
  idUsuarioLogueado: string;

  plato: PlatoInterface = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: ''
  };

  constructor(
    private platoService: PlatoService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.todosPlatos();
  }

  todosPlatos() {
    this.platoService.getAllPlatos().subscribe(platos => this.platos = platos);
  }

  // Comprueba si el usuario esta logueado y devuelve el user
  onComprobarUserLogin() {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.idUsuarioLogueado = user.uid;
      }
    });
  }

  getDetallesPlato() {
    this.idPlato = this.route.snapshot.params['id'];
    this.platoService.getOnePlato(this.idPlato).subscribe(plato => {
      this.plato = plato;
      // if(this.idUsuarioLogueado == this.plato.id)
    });
  }

  onClickDelete() {
    if (confirm('Estas seguro?')) {
      this.platoService.deletePlato(this.plato);
    }
  }

}
