import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient){}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course)
  }

  update(course) {
    return this.http.put(this.getUrlWithID(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }


  // courses: Course[] = [
  //   {
  //     id: '1',
  //     title: 'Angular 13 Fundamentals',
  //     description: 'Learn the fundamentals of Angular 13',
  //     percentComplete: 66,
  //     favorite: true,
  //   },
  //   {
  //     id: '2',
  //     title: 'Javascript Fundamentals',
  //     description: 'Learn the Javascript fundamentals of Angular 13',
  //     percentComplete: 98,
  //     favorite: true,
  //   },
  //   {
  //     id: '3',
  //     title: 'Python Fundamentals',
  //     description: 'Learn the Python fundamentals  ',
  //     percentComplete: 78,
  //     favorite: true,
  //   },
  // ];
}
