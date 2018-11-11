import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.scss']
})
export class DashAdminComponent implements OnInit {

  items: any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() {
  }

  agregar() {
    this.conexion.agregarItem(this.items);
    this.items.nombre = '';
  }

}
