import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantProfessionalLinkComponent } from './tenant-professional-link.component';

describe('TenantProfessionalLinkComponent', () => {
  let component: TenantProfessionalLinkComponent;
  let fixture: ComponentFixture<TenantProfessionalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantProfessionalLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantProfessionalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
