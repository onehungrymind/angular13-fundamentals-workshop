import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons = [];
  selectedLesson = null;
  lessons$;

  constructor(
    private lessonsService: LessonsService
  ) {}

  ngOnInit() {
    // this.lessons = this.lessonsService.lessons;
    this.lessons$ = this.lessonsService.lessons$;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }

  deleteLesson(lessonTitle) {

  }
}
