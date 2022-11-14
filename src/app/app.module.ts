import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingGeneralComponent } from './landing-general/landing-general.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { PlanesComponent } from './planes/planes.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingGeneralComponent,
    ArchivosComponent,
    CarritoComponent,
    DetalleProductoComponent,
    ListaEmpresasComponent,
    OrdenesComponent,
    PlanesComponent,
    ProductosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
