import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() set selectedCourse(value: Course) {
    if (value?.title) {
      this.originalTitle = value.title;
    }
    this.currentCourse = Object.assign({}, value);
  }
  @Output() courseSaved = new EventEmitter<Course>();
  @Output() courseCancelled = new EventEmitter();

  originalTitle: string;
  currentCourse: Course;

  constructor() { }

  ngOnInit(): void {
  }

  saveCourse(course: Course) {
    this.courseSaved.emit(course);
  }

  cancelCourse() {
    this.courseCancelled.emit();
  }
}
