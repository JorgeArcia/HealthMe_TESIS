import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantOperatorsComponent } from './tenant-operators.component';

describe('TenantOperatorsComponent', () => {
  let component: TenantOperatorsComponent;
  let fixture: ComponentFixture<TenantOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
