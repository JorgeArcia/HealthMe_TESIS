import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTenantsListComponent } from './professional-tenants-list.component';

describe('ProfessionalTenantsListComponent', () => {
  let component: ProfessionalTenantsListComponent;
  let fixture: ComponentFixture<ProfessionalTenantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalTenantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalTenantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
