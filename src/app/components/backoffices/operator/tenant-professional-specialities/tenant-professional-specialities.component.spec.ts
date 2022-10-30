import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantProfessionalSpecialitiesComponent } from './tenant-professional-specialities.component';

describe('TenantProfessionalSpecialitiesComponent', () => {
  let component: TenantProfessionalSpecialitiesComponent;
  let fixture: ComponentFixture<TenantProfessionalSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantProfessionalSpecialitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantProfessionalSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
