import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacationComponent } from './admin-vacation.component';

describe('AdminVacationComponent', () => {
  let component: AdminVacationComponent;
  let fixture: ComponentFixture<AdminVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
