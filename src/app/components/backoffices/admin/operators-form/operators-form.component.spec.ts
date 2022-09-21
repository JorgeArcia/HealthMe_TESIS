import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsFormComponent } from './operators-form.component';

describe('OperatorsFormComponent', () => {
  let component: OperatorsFormComponent;
  let fixture: ComponentFixture<OperatorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
