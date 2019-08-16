import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'gestion-post', loadChildren: './gestion-post/gestion-post.module#GestionPostPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'compra', loadChildren: './compra/compra.module#CompraPageModule' },
  { path: 'det-articulo', loadChildren: './det-articulo/det-articulo.module#DetArticuloPageModule' },
  { path: 'det-carrito', loadChildren: './det-carrito/det-carrito.module#DetCarritoPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
