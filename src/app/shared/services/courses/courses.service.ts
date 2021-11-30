import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../../interfaces/course.interface';
import { NotificationService } from '../notifications/notification.service';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  getAllCourses(displayNotification: boolean) {
    if (displayNotification) {
      this.notificationService.notify('Get All Courses HTTP Call');
    }
    return this.http.get<Course[]>(this.getUrl());
  }

  createCourse(course: Course) {
    this.notificationService.notify('Create Course HTTP Call');
    return this.http.post<Course>(this.getUrl(), course);
  }

  updateCourse(course: Course) {
    this.notificationService.notify('Update Course HTTP Call');
    return this.http.put<Course>(this.getUrlWithID(course.id), course);
  }

  deleteCourse(id: number) {
    this.notificationService.notify('Delete Course HTTP Call');
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
