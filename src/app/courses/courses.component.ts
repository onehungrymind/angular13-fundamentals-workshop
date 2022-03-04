import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
const emptyCourse: Course ={
  id:null,
  title: '',
  description: '',
  percentComplete: 26,
  favourite: false
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = [

    // 1. render courses in a list
    // 2. seoect a course
    // 3. render a selected course
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Js Course',
      description: 'Learn the fundamentals JS',
      percentComplete: 76,
      favorite: true
    }
  ];
   selectedCourse = emptyCourse;
   originalTitle='';

  constructor() { }

  ngOnInit(): void {
  }
  selectCourse(course){
    // ...course is the soluton of shared mutable
    this.selectedCourse = {...course};
    this.originalTitle= course.title;
  }
  deleteCourse(courseId){
    console.log('Delete Course', courseId);
  }
  saveCourse(course){
    console.log('save Course',course);
  }
  reset(){
    this.selectCourse({...emptyCourse});
  }
}
