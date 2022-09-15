import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './components/common/home/home.module';
import { SigninModule } from './components/common/auth/signin/signin.module';
//import { SigninModule } from './components/common/auth/admin-signin/';

const routes: Routes = [
  
  // Default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Common routes
  { path: 'home', loadChildren: () => HomeModule, data: { showHeader: true }},
  { path: 'auth', loadChildren: () => SigninModule, data: { showHeader: true }},
  { path: 'auth/signin', loadChildren: () => SigninModule, data: { showHeader: true }},

  // Wrong routes
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
