import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAgendaManageComponent } from './professional-agenda-manage.component';

describe('ProfessionalAgendaManageComponent', () => {
  let component: ProfessionalAgendaManageComponent;
  let fixture: ComponentFixture<ProfessionalAgendaManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalAgendaManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalAgendaManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
