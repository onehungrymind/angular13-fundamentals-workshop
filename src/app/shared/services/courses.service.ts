import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../interfaces/course.interface';
import { NotificationService } from './notification.service';

const BASE_URL = 'http://localhost:3000/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getAllCourses(displayNotification: boolean) {
    if (displayNotification) {
      this.notificationService.notify('Get All Courses HTTP Call');
    }
    return this.http.get<Course[]>(BASE_URL);
  }

  createCourse(course: Course) {
    this.notificationService.notify('Create Course HTTP Call');
    return this.http.post<Course>(BASE_URL, course);
  }

  updateCourse(course: Course) {
    this.notificationService.notify('Update Course HTTP Call');
    return this.http.put<Course>(`${BASE_URL}/${course.id}`, course);
  }

  deleteCourse(id: number) {
    this.notificationService.notify('Delete Course HTTP Call');
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
