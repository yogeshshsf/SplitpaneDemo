import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstmenuPage } from './firstmenu.page';

const routes: Routes = [
  {
    path: '',
    component: FirstmenuPage,
    children: [
      {
        path:'firstpage',
        loadChildren: '../firstpage/firstpage.module#FirstpagePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstmenuPage]
})
export class FirstmenuPageModule {}
