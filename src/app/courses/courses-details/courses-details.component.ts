import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  @Input() currentCourse: Course;
  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();

}
