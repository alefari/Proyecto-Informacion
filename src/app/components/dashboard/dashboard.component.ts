import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
       console.log(this.items);
    });
  }

  ngOnInit() {
  }

}
