import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  model = 'courses';


  all(){
    return this.http.get(this.getUrl());
  }

  private getUrl(){
    return `${BASE_URL}/${this.model}`;
  }


  courses: Course[] = [{
    id: '1',
    title: 'Angular 13 Fundamentals',
    description: 'Learn the fundamentals of Angular 13',
    percentComplete: 12,
    favorite: true
  },
  {
    id: '2',
    title: 'Angular 13 HARDEST',
    description: 'Learn the fundamentals of Angular 13',
    percentComplete: 98,
    favorite: true
  },
  {
    id: '3',
    title: 'Angular 13 EASTIEST',
    description: 'Learn the fundamentals of Angular 13',
    percentComplete: 26,
    favorite: true
  }];


  constructor(private http : HttpClient){
  }
}
