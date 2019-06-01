import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondmenuPage } from './secondmenu.page';

const routes: Routes = [
  {
    path: '',
    component: SecondmenuPage,
    children: [
      {
        path: 'secondpage',
        loadChildren: '../secondpage/secondpage.module#SecondpagePageModule'
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
  declarations: [SecondmenuPage]
})
export class SecondmenuPageModule {}
