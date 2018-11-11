import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BarraComponent } from './components/barra/barra.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ConexionService } from './services/conexion.service';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { AgregarPlatoComponent } from './components/agregar-plato/agregar-plato.component';
import { AuthService } from './services/auth.service';


const router: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent
  },

  {
    path: 'Login',
    component: LoginComponent
  },

  {
    path: 'DashAdmin',
    component: DashAdminComponent
  },

  {
    path: '',
    component: LoginComponent
  },

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [ConexionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


