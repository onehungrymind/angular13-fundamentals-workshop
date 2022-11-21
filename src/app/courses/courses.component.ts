import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  courses = [];
  courses$: any;
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private courseService: CoursesService) { 
  }

  ngOnInit(): void {
    this.fetchCourses();
  }

  selectCourse(course){
    this.selectedCourse = course;
  }

  deleteCourse(courseId){
    this.courseService.delete(courseId)
      .subscribe(result => this.fetchCourses());

  }

  reset(){
    this.selectCourse({...emptyCourse}); //pass by reference. 
    
  }

  fetchCourses(){
    this.courses$ = this.courseService.all();
    // this.courseService.all()
    // .subscribe((result:any)=> this.courses = result);
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
