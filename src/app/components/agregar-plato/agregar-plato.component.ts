import { Component, OnInit } from '@angular/core';
import { PlatoInterface } from '../../models/Plato';
import { AuthService } from '../../services/auth.service';
import { PlatoService } from '../../services/plato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-plato',
  templateUrl: './agregar-plato.component.html',
  styleUrls: ['./agregar-plato.component.scss']
})
export class AgregarPlatoComponent implements OnInit {
  plato: PlatoInterface = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: 0
  };

  selectedFile = null;

  constructor(
    private authService: AuthService,
    private platoService: PlatoService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onGuardarReceta({value}: {value: PlatoInterface}) {
    console.log(value);
    this.platoService.addNewPlato(value);
    this.router.navigate(['/DashAdmin']);
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }


}
