import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantProfessionalsListComponent } from './tenant-professionals-list.component';

describe('TenantProfessionalsListComponent', () => {
  let component: TenantProfessionalsListComponent;
  let fixture: ComponentFixture<TenantProfessionalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantProfessionalsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantProfessionalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
