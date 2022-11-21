import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons = [];
  lessons$;
  selectedLesson = null;
  constructor(private lessonsService: LessonsService) {}
  selectLesson(courseLesson){
    this.selectedLesson = courseLesson;
  }
  ngOnInit() {
    this.lessons = this.lessonsService.lessons;
    this.lessons$= this.lessonsService.lessons$; //stream
  }
}
