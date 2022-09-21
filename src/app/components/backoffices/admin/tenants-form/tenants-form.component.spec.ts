import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsFormComponent } from './tenants-form.component';

describe('TenantsFormComponent', () => {
  let component: TenantsFormComponent;
  let fixture: ComponentFixture<TenantsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
