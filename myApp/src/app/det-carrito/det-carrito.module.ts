import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetCarritoPage } from './det-carrito.page';
import { ComponentsModule } from '../Components/components.module';

const routes: Routes = [
  {
    path: '',
    component: DetCarritoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [DetCarritoPage]
})
export class DetCarritoPageModule {}
