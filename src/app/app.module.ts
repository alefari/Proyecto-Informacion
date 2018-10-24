import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BarraComponent } from './components/barra/barra.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


