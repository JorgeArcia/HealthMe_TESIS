import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './components/common/home/home.module';
import { SigninModule } from './components/common/auth/signin/signin.module';
import { PanelModule } from './components/common/auth/panel/panel.module';

import { AdminDashboardModule } from './components/backoffices/admin/admin-dashboard/admin-dashboard.module';
import { TenantsFormModule } from './components/backoffices/admin/tenants-form/tenants-form.module';
import { OperatorsFormModule } from './components/backoffices/admin/operators-form/operators-form.module';
import { TenantsListModule } from './components/backoffices/admin/tenants-list/tenants-list.module';
import { OperatorsListModule } from './components/backoffices/admin/operators-list/operators-list.module';

import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { OperatorAuthGuard } from './guards/operator-auth.guard';
import { ProfessionalAuthGuard } from './guards/professional-auth.guard';
import { PatientAuthGuard } from './guards/patient-auth.guard';


const routes: Routes = [

  // Default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Common routes
  { path: 'home', loadChildren: () => HomeModule, data: { showHeader: true }},
  { path: 'signup', loadChildren: () => SigninModule, data: { showHeader: true }},
  { path: 'auth', loadChildren: () => SigninModule, data: { showHeader: true }},
  { path: 'auth/panel', canActivate: [AuthGuard], loadChildren: () => PanelModule, data: { showHeader: true }},

  // Admin routes [ /Tenants, /Operators ]
  { path: 'admin/dashboard', canActivate: [AdminAuthGuard], loadChildren: () => AdminDashboardModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants', canActivate: [AdminAuthGuard], loadChildren: () => TenantsListModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:id', canActivate: [AdminAuthGuard], loadChildren: () => TenantsFormModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/operators', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsListModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/operators/:id', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsFormModule, data: { showHeader: false, showAdminHeader: true }},
  
  // Operator routes [ Tenants, Operators ]
  { path: 'operator/dashboard', canActivate: [OperatorAuthGuard], loadChildren: () => AdminDashboardModule, data: { showHeader: false, showOperatorHeader: true }},

  // Professional routes [ Tenants, Operators ]
  { path: 'professional/dashboard', canActivate: [ProfessionalAuthGuard], loadChildren: () => AdminDashboardModule, data: { showHeader: false, showProfessionalHeader: true }},

  // Patient routes [ Tenants, Operators ]
  { path: 'patient/dashboard', canActivate: [PatientAuthGuard], loadChildren: () => AdminDashboardModule, data: { showHeader: false, showPatientHeader: true }},

  // Wrong routes
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
