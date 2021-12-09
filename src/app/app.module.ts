import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminPayrollComponent } from './examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/child-routes/admin-vacation/admin-vacation.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesComponent } from './courses/courses.component';
import { DynamicComponent } from './examples/dynamic-component/dynamic-component.component';
import { ExamplesComponent } from './examples/examples.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { NotificationService } from './shared/services/notifications/notification.service';
import { CircleComponent } from './examples/dynamic-component/circle/circle.component';
import { SquareComponent } from './examples/dynamic-component/square/square.component';
import { TriangleComponent } from './examples/dynamic-component/triangle/triangle.component';
import { CustomInputComponent } from './examples/custom-input/custom-input.component';
import { CustomControlComponent } from './examples/custom-input/custom-control/custom-control.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { ProtectedComponent } from './examples/protected/protected.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CoursesListComponent,
    LoginComponent,
    AdminComponent,
    AdminPayrollComponent,
    AdminVacationComponent,
    ExamplesComponent,
    DynamicComponent,
    CircleComponent,
    SquareComponent,
    TriangleComponent,
    CustomInputComponent,
    CustomControlComponent,
    RouteParamsComponent,
    ProtectedComponent,
  ],
  providers: [AuthService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
