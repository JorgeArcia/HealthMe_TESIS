import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTenantsListComponent } from './operator-tenants-list.component';

describe('OperatorTenantsListComponent', () => {
  let component: OperatorTenantsListComponent;
  let fixture: ComponentFixture<OperatorTenantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorTenantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorTenantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
