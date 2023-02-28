import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() courses: Course[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
