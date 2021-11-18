import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { CoursesService } from '../shared/services/courses.service';
import { HttpInterceptorService } from '../shared/services/http-interceptor.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent
  ],
  providers: [
    CoursesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ]
})
export class CoursesModule { }
