import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  currentCourse: Course = {
    id: '',
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
  };
  selectedCourse = this.currentCourse;
  originalTitle = '';

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    // this.courses = this.coursesService.courses;
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.all()
    .subscribe((result: any) => {
      this.courses = result
    });
  }

  selectCourse(course: Course) {
    this.originalTitle = course.title;
    this.selectedCourse = {...course,
      title: course.title,
      description: course.description
    };
  }

  deleteCourse(courseId: string) {
    this.coursesService.delete(courseId)
      .subscribe((result) => {
        this.fetchCourses();
      })
    // this.courses = this.courses.filter(course => {
    //   return course.id !== courseId;
    // });
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    // console.log(this.courses);
    // const savedCourses = [...this.courses];
    // savedCourses[course.id] = course;
    // return {
    //   ...savedCourses
    // }
  }

  createCourse(course) {
    this.coursesService.create(course)
      .subscribe((result) =>  {
        this.fetchCourses();
        // return [...this.courses, course]
      });
  }

  updateCourse(course) {
    this.coursesService.update(course)
      .subscribe((result) => {
        this.fetchCourses();
        // let index = this.courses.map(e => e.id).indexOf(course.id);
        // this.courses[index] = course;
      });
  }

  // updateCourse(course: Course) {
  //   let index = this.courses.map(e => e.id).indexOf(course.id);
  //   this.courses[index] = course;
  // }

  reset() {
    this.selectCourse({...this.currentCourse});
  }

}
