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

    //this.courses = this.courseService.courses;
    this.courseService.all()
      .subscribe((result:any)=> this.courses = result);
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

  saveCourse(course){
    console.log("SAVE COURSE: ", course)
  }

}
