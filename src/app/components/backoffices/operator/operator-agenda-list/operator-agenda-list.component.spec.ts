import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAgendaListComponent } from './operator-agenda-list.component';

describe('OperatorAgendaListComponent', () => {
  let component: OperatorAgendaListComponent;
  let fixture: ComponentFixture<OperatorAgendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorAgendaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
