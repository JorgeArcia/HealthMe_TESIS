import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Common imports
import { HomeModule } from './components/common/home/home.module';
import { SignupModule } from './components/common/auth/signup/signup.module';
import { SigninModule } from './components/common/auth/signin/signin.module';
import { PanelModule } from './components/common/auth/panel/panel.module';

// Admin imports
import { AdminDashboardModule } from './components/backoffices/admin/admin-dashboard/admin-dashboard.module';
import { TenantsFormModule } from './components/backoffices/admin/tenants-form/tenants-form.module';
import { TenantsListModule } from './components/backoffices/admin/tenants-list/tenants-list.module';
import { TenantOperatorsModule } from './components/backoffices/admin/tenant-operators/tenant-operators.module';
import { TenantOperatorLinkModule } from './components/backoffices/admin/tenant-operator-link/tenant-operator-link.module';
import { OperatorsFormModule } from './components/backoffices/admin/operators-form/operators-form.module';
import { OperatorsListModule } from './components/backoffices/admin/operators-list/operators-list.module';
// import { OperatorsListModule } from './components/backoffices/admin/operators-list/operators-list.module';

// Operator imports
import { OperatorDashboardModule } from './components/backoffices/operator/operator-dashboard/operator-dashboard.module';
import { OperatorTenantsListModule } from './components/backoffices/operator/operator-tenants-list/operator-tenants-list.module';
import { ProfessionalsListModule } from './components/backoffices/operator/professionals-list/professionals-list.module';
import { ProfessionalsFormModule } from './components/backoffices/operator/professionals-form/professionals-form.module';
import { TenantProfessionalsModule } from './components/backoffices/operator/tenant-professionals/tenant-professionals.module';
import { TenantProfessionalLinkModule } from './components/backoffices/operator/tenant-professional-link/tenant-professional-link.module';
import { ProfessionalCalendarModule } from './components/backoffices/operator/professional-calendar/professional-calendar.module';
import { OperatorAgendaListModule } from './components/backoffices/operator/operator-agenda-list/operator-agenda-list.module';
import { OperatorAgendaListManageModule } from './components/backoffices/operator/operator-agenda-list-manage/operator-agenda-list-manage.module';
import { ProfessionalAgendaManageModule } from './components/backoffices/operator/professional-agenda-manage/professional-agenda-manage.module';

// Professional imports
import { ProfessionalDashboardModule } from './components/backoffices/professional/professional-dashboard/professional-dashboard.module';
import { ProfessionalTenantsListModule } from './components/backoffices/professional/professional-tenants-list/professional-tenants-list.module';
import { ProfessionalAgendaListModule } from './components/backoffices/professional/professional-agenda-list/professional-agenda-list.module';
import { ProfessionalClinicHistoryModule } from './components/backoffices/professional/professional-clinic-history/professional-clinic-history.module';

// Patient imports
import { PatientDashboardModule } from './components/backoffices/patient/patient-dashboard/patient-dashboard.module';
import { PatientTenantsListModule } from './components/backoffices/patient/patient-tenants-list/patient-tenants-list.module';
import { PatientAppointmentsModule } from './components/backoffices/patient/patient-appointments/patient-appointments.module';
import { PatientClinicHistoryModule } from './components/backoffices/patient/patient-clinic-history/patient-clinic-history.module';

// Guards for each role
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { OperatorAuthGuard } from './guards/operator-auth.guard';
import { ProfessionalAuthGuard } from './guards/professional-auth.guard';
import { PatientAuthGuard } from './guards/patient-auth.guard';


// Routes declaration
const routes: Routes = [

  // Default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Common routes
  { path: 'home', loadChildren: () => HomeModule, data: { showHeader: true }},
  { path: 'signup', loadChildren: () => SignupModule, data: { showHeader: true }},
  { path: 'auth', loadChildren: () => SigninModule, data: { showHeader: true }},
  { path: 'auth/panel', canActivate: [AuthGuard], loadChildren: () => PanelModule, data: { showHeader: true }},

  // Admin routes [ /Dashboard, /Tenants, /Operators ]
  { path: 'admin/dashboard', canActivate: [AdminAuthGuard], loadChildren: () => AdminDashboardModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants', canActivate: [AdminAuthGuard], loadChildren: () => TenantsListModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:tenantId', canActivate: [AdminAuthGuard], loadChildren: () => TenantsFormModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:tenantId/operators', canActivate: [AdminAuthGuard], loadChildren: () => TenantOperatorsModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/tenants/:tenantId/operators/link', canActivate: [AdminAuthGuard], loadChildren: () => TenantOperatorLinkModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/operators', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsListModule, data: { showHeader: false, showAdminHeader: true }},
  { path: 'admin/operators/create', canActivate: [AdminAuthGuard], loadChildren: () => OperatorsFormModule, data: { showHeader: false, showAdminHeader: true }},
  
  // Operator routes [ /Dashboard, /Tenants, /Professionals ]
  { path: 'operator/dashboard', canActivate: [OperatorAuthGuard], loadChildren: () => OperatorDashboardModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants', canActivate: [OperatorAuthGuard], loadChildren: () => OperatorTenantsListModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants/agenda', canActivate: [OperatorAuthGuard], loadChildren: () => OperatorAgendaListModule, data: { showHeader: false, showOperatorHeader: true}},
  { path: 'operator/tenants/agenda/:agendaId/manage', canActivate: [OperatorAuthGuard], loadChildren: () => OperatorAgendaListManageModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants/professional/:professionalId/agenda', canActivate: [OperatorAuthGuard], loadChildren: () => ProfessionalAgendaManageModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants/:tenantId/professionals', canActivate: [OperatorAuthGuard], loadChildren: () => TenantProfessionalsModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/tenants/:tenantId/professionals/link', canActivate: [OperatorAuthGuard], loadChildren: () => TenantProfessionalLinkModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/professionals', canActivate: [OperatorAuthGuard], loadChildren: () => ProfessionalsListModule, data: { showHeader: false, showOperatorHeader: true }},
  { path: 'operator/professionals/create', canActivate: [OperatorAuthGuard], loadChildren: () => ProfessionalsFormModule, data: { showHeader: false, showOperatorHeader: true }},
  

  // Professional routes [ Tenants, Operators ]
  { path: 'professional/dashboard', canActivate: [ProfessionalAuthGuard], loadChildren: () => ProfessionalDashboardModule, data: { showHeader: false, showProfessionalHeader: true }},
  { path: 'professional/tenants', canActivate: [ProfessionalAuthGuard], loadChildren: () => ProfessionalTenantsListModule, data: { showHeader: false, showProfessionalHeader: true }},
  { path: 'professional/agenda', canActivate: [ProfessionalAuthGuard], loadChildren: () => ProfessionalAgendaListModule, data: { showHeader: false, showProfessionalHeader: true }},
  { path: 'professional/clinic_history', canActivate: [ProfessionalAuthGuard], loadChildren: () => ProfessionalClinicHistoryModule, data: { showHeader: false, showProfessionalHeader: true }},
  
  // Patient routes [ Tenants, Operators ]
  { path: 'patient/dashboard', canActivate: [PatientAuthGuard], loadChildren: () => PatientDashboardModule, data: { showHeader: false, showPatientHeader: true }},
  { path: 'patient/tenants', canActivate: [PatientAuthGuard], loadChildren: () => PatientTenantsListModule, data: { showHeader: false, showPatientHeader: true }},
  { path: 'patient/appointments', canActivate: [PatientAuthGuard], loadChildren: () => PatientAppointmentsModule, data: { showHeader: false, showPatientHeader: true }},
  { path: 'patient/clinic_history', canActivate: [PatientAuthGuard], loadChildren: () => PatientClinicHistoryModule, data: { showHeader: false, showPatientHeader: true }},



  // Wrong routes
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
