import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course: Course) {
    this.courseSelected.emit(course);
  }

  deleteCourse(id: number) {
    this.courseDeleted.emit(id);
  }
}
