import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './components/common/home/home.module';
import { SignupModule } from './components/common/auth/signup/signup.module';
import { SigninModule } from './components/common/auth/signin/signin.module';
import { PanelModule } from './components/common/auth/panel/panel.module';

import { AdminDashboardModule } from './components/backoffices/admin/admin-dashboard/admin-dashboard.module';
import { TenantsFormModule } from './components/backoffices/admin/tenants-form/tenants-form.module';
import { TenantsListModule } from './components/backoffices/admin/tenants-list/tenants-list.module';
import { TenantOperatorsModule } from './components/backoffices/admin/tenant-operators/tenant-operators.module';
import { TenantOperatorLinkModule } from './components/backoffices/admin/tenant-operator-link/tenant-operator-link.module';
import { OperatorsFormModule } from './components/backoffices/admin/operators-form/operators-form.module';
import { OperatorsListModule } from './components/backoffices/admin/operators-list/operators-list.module';
// import { OperatorsListModule } from './components/backoffices/admin/operators-list/operators-list.module';

import { OperatorDashboardModule } from './components/backoffices/operator/operator-dashboard/operator-dashboard.module';
import { OperatorTenantsListModule } from './components/backoffices/operator/operator-tenants-list/operator-tenants-list.module';
import { TenantProfessionalsModule } from './components/backoffices/operator/tenant-professionals/tenant-professionals.module';
import { ProfessionalCalendarModule } from './components/backoffices/operator/professional-calendar/professional-calendar.module';
import { TenantProfessionalsListModule } from './components/backoffices/operator/tenant-professionals-list/tenant-professionals-list.module';


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
  { path: 'signup', loadChildren: () => SignupModule, data: { showHeader: true }},
  { path: 'auth', loadChildren: () => SigninModule, data: { showHeader: true }},
  { path: 'auth/panel', canActivate: [AuthGuard], loadChildren: () => PanelModule, data: { showHeader: true }},

  // Admin routes [ /Tenants, /Operators ]
  { path: 'admin/dashboard', canActivate: [AdminAuthGuard], loadChildren: () => AdminDashboardModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants', canActivate: [AdminAuthGuard], loadChildren: () => TenantsListModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:tenantId', canActivate: [AdminAuthGuard], loadChildren: () => TenantsFormModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:tenantId/operators', canActivate: [AdminAuthGuard], loadChildren: () => TenantOperatorsModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:tenantId/operators/link', canActivate: [AdminAuthGuard], loadChildren: () => TenantOperatorLinkModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/operators', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsFormModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/operators/create', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsListModule, data: { showHeader: false, showAdminHeader: true }},
  // { path: 'admin/operators/:id', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsFormModule, data: { showHeader: false, showAdminHeader: true }},
  
  // Operator routes [ Tenants, Operators ]
  { path: 'operator/dashboard', canActivate: [OperatorAuthGuard], loadChildren: () => OperatorDashboardModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants', canActivate: [OperatorAuthGuard], loadChildren: () => OperatorTenantsListModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants/create', canActivate: [OperatorAuthGuard], loadChildren: () => TenantProfessionalsListModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/professionals', canActivate: [OperatorAuthGuard], loadChildren: () => TenantProfessionalsModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/professional/calendar', canActivate: [OperatorAuthGuard], loadChildren: () => ProfessionalCalendarModule, data: { showHeader: false, showOperatorHeader: true }},
  

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
