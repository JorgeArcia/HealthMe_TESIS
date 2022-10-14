import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantOperatorLinkComponent } from './tenant-operator-link.component';

describe('TenantOperatorLinkComponent', () => {
  let component: TenantOperatorLinkComponent;
  let fixture: ComponentFixture<TenantOperatorLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantOperatorLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantOperatorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
