import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantProfessionalsComponent } from './tenant-professionals.component';

describe('TenantProfessionalsComponent', () => {
  let component: TenantProfessionalsComponent;
  let fixture: ComponentFixture<TenantProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantProfessionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
