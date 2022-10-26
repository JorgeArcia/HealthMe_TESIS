import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAgendaListComponent } from './professional-agenda-list.component';

describe('ProfessionalAgendaListComponent', () => {
  let component: ProfessionalAgendaListComponent;
  let fixture: ComponentFixture<ProfessionalAgendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalAgendaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
