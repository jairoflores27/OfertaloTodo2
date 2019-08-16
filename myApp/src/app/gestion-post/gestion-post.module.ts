import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GestionPostPage } from './gestion-post.page';
import { ComponentsModule } from '../Components/components.module';

const routes: Routes = [
  {
    path: '',
    component: GestionPostPage
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
  declarations: [GestionPostPage]
})
export class GestionPostPageModule {}
