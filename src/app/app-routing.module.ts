import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivosComponent } from './archivos/archivos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

import { LandingGeneralComponent } from './landing-general/landing-general.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { LoginComponent } from './login/login.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { PlanesComponent } from './planes/planes.component';
import { ProductosComponent } from './productos/productos.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'archivos',
    component: ArchivosComponent,
  },
  {
    path: 'cart',
    component: CarritoComponent,
  },
  {
    path: 'landing',
    component: LandingGeneralComponent,
  },
  {
    path: 'detalle-producto',
    component: DetalleProductoComponent,
  },
  {
    path: 'lista-empresas',
    component: ListaEmpresasComponent,
  },
  {
    path: 'planes',
    component: PlanesComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'ordenes',
    component: OrdenesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
