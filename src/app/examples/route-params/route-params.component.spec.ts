import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RouteParamsComponent } from './route-params.component';

describe('RouteParamsComponent', () => {
  let component: RouteParamsComponent;
  let fixture: ComponentFixture<RouteParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteParamsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
