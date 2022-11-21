import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 50,
  favorite: false

}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  //step 1 render courses in a list
  //step 2 select a course
  //step 3 render selected course
  courses = [
  ];

  constructor(private courseService: CoursesService) { 
  }

  ngOnInit(): void {
    this.fetchCourses();
  }

  selectedCourse = emptyCourse;
  originalTitle = '';

  selectCourse(course){
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  deleteCourse(courseId){
    console.log("DELETE ", courseId);

  }

  reset(){
    this.selectCourse({...emptyCourse}); //pass by reference. 
    
  }

  fetchCourses(){
    this.courseService.all()
    .subscribe((result:any)=> this.courses = result);
  }

  saveCourse(course){
    if(course.id){
      this.updateCourse(course);
    }else{
      this.createCourse(course);
    }
  }

  createCourse(course){
    this.courseService.create(course)
      .subscribe(result => this.fetchCourses());  //rehydrate
  }

  updateCourse(course){
    this.courseService.update(course)
      .subscribe(result => this.fetchCourses());  //rehydrate
  }

}
