import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: "",
  percentComplete: 0,
  favorite: false
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void {
    //this.courses = this.CoursesService.courses;
    this.fetchCourses();
   }
  
  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }

  fetchCourses() {
    this.CoursesService.all().subscribe(
      (result: any) => (this.courses = result)
    );
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.CoursesService.create(course).subscribe(result => this.fetchCourses())
  }

  updateCourse(course) {
     this.CoursesService.update(course).subscribe((result) =>
       this.fetchCourses()
     );
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE', courseId);
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }

}
