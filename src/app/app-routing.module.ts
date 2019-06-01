import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'firstmenu/firstpage', pathMatch: 'full' },
  { path: 'firstmenu', loadChildren: './pages/firstmenu/firstmenu.module#FirstmenuPageModule' },
  { path: 'secondmenu', loadChildren: './pages/secondmenu/secondmenu.module#SecondmenuPageModule' },
  { path: 'firstpage', loadChildren: './pages/firstpage/firstpage.module#FirstpagePageModule' },
  { path: 'secondpage', loadChildren: './pages/secondpage/secondpage.module#SecondpagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
