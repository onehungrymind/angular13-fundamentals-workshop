import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth/auth.service';

const noop = () => {};

const mockAuthService = {
  isAuthenticated$: of(true),
  logout: noop,
}

describe('AppComponent', () => {
  let component: AppComponent;
  let service: AuthService;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the correct title'`, () => {
    const title = 'Angular 13 Fundamentals';
    expect(component.title).toEqual(title);
  });

  it(`should render an updated title`, () => {
    const newTitle = 'Angular 20 Fundamentals';
    const titleElement = de.query(By.css('.title'));
    component.title = newTitle;
    fixture.detectChanges();
    expect(titleElement.nativeElement.innerText).toBe(newTitle);
  })

  it(`should properly delegate logout responsibility`, () => {
    spyOn(service, 'logout').and.callThrough();
    component.logout();
    expect(service.logout).toHaveBeenCalled();
  })
});
