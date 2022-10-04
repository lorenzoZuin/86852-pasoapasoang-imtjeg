import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common'; 
 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './Components/articulos-familias/articulos-familias.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
    { path: 'articulos', component: ArticulosComponent }
  ]) ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  InicioComponent, 
                  ArticulosFamiliasComponent, 
                  MenuComponent, 
                  ArticulosComponent ],
  providers: [  { provide: APP_BASE_HREF, useValue: "/" } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
