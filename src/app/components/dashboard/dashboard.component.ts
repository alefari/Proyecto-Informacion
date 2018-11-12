import { Component, OnInit } from '@angular/core';
import { PlatoInterface } from '../../models/Plato';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  platos: PlatoInterface[];

  constructor(
    private platoService: PlatoService
  ) {}

  todosPlatos() {
    this.platoService.getAllPlatos().subscribe(platos => this.platos = platos);
  }

  ngOnInit() {
    this.todosPlatos();
  }

  // items: any;
  // constructor(private conexion: ConexionService) {
  //   this.conexion.listaItem().subscribe(item => {
  //     this.items = item;
  //      console.log(this.items);
  //   });
  // }

}
