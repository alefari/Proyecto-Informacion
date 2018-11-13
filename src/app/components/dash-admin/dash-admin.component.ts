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

  constructor(
    private platoService: PlatoService,
  ) {}

  ngOnInit() {
    this.todosPlatos();
  }

  todosPlatos() {
    this.platoService.getAllPlatos().subscribe(platos => this.platos = platos);
  }

}
