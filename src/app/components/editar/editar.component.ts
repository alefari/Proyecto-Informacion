import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatoInterface } from '../../models/Plato';
import { PlatoService } from '../../services/plato.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
idPlato: string;
plato: PlatoInterface = {
  id: '',
  nombre: '',
  descripcion: '',
  precio: 0
};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platoService: PlatoService
  ) { }

  ngOnInit() {
    this.getDetallesPlato();
  }

  getDetallesPlato() {
    this.idPlato = this.route.snapshot.params['id'];
    this.platoService.getOnePlato(this.idPlato).subscribe(plato => this.plato = plato);
  }

  onModificarPlato({value}: {value: PlatoInterface}) {
    value.id = this.idPlato;
    this.platoService.updatePlato(value);
    this.router.navigate(['/DashAdmin']);
  }

}
