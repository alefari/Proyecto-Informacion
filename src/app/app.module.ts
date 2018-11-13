import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AgregarPlatoComponent } from './components/agregar-plato/agregar-plato.component';
import { RouterModule, Routes } from '@angular/router';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularFireModule } from 'angularfire2';
import { CarritoComponent } from './components/carrito/carrito.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ConexionService } from './services/conexion.service';
import { BarraComponent } from './components/barra/barra.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlatoService } from './services/plato.service';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from '../app/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PaypalComponent } from './components/paypal/paypal.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarComponent } from './components/editar/editar.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'DashAdmin', component: DashAdminComponent, canActivate: [AuthGuard]},
  {path: 'AgregarPlato', component: AgregarPlatoComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Carrito', component: CarritoComponent},
  {path: 'Detalles/:id', component: DetallesComponent},
  {path: 'Paypal', component: PaypalComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Editar/:id', component: EditarComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    LoginComponent,
    DashboardComponent,
    TarjetaComponent,
    DashAdminComponent,
    AgregarPlatoComponent,
    NotFoundComponent,
    CarritoComponent,
    PaypalComponent,
    AgregarPlatoComponent,
    RegistroComponent,
    DetallesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ConexionService, AuthService, AuthGuard, PlatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
