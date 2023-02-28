import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  courses$: any;
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courses$ = this.coursesService.all();
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    console.log(course);
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  updateCourse(course) {
    this.coursesService
      .update(course)
      .subscribe((result) => this.fetchCourses());
  }

  createCourse(course) {
    this.coursesService
      .create(course)
      .subscribe((result) => this.fetchCourses());
  }

  deleteCourse(course) {
    this.coursesService
      .update(course)
      .subscribe((result) => this.fetchCourses());
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
