import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$;
  lessons = [];
  selectedLesson: any;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessons = this.lessonsService.lessons;
    this.lessons$ = this.lessonsService.lessons$;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
