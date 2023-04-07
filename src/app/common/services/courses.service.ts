import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(
    private http: HttpClient
  ) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.patch(this.getUrlWithId(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 18,
      favorite: true
    },
    {
      id: '2',
      title: 'JavaScript the Hardest Parts Ever',
      description: 'Learn JavaScript like a pro',
      percentComplete: 59,
      favorite: true
    },
    {
      id: '3',
      title: 'App Development Patterns',
      description: 'DRY or DIE',
      percentComplete: 12,
      favorite: true
    },
  ]

}
