import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAgendaListManageComponent } from './operator-agenda-list-manage.component';

describe('OperatorAgendaListManageComponent', () => {
  let component: OperatorAgendaListManageComponent;
  let fixture: ComponentFixture<OperatorAgendaListManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorAgendaListManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorAgendaListManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
