import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Course} from "../model/course";
import {LoginService} from './login.service';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private BASE_URL = "http://localhost:8080/course";
  public ALL_COURSES = `${this.BASE_URL}/findAll`;
  public ADD_COURSE = `${this.BASE_URL}/add`;
  public UPDATE_COURSE = `${this.BASE_URL}/update`;
  public DELETE_COURSE = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.ALL_COURSES, {headers: this.loginService.headers});
  }

  addCourse(course: Course) : Observable<Course>{
    return this.http.post<Course>(this.ADD_COURSE, course, {headers: this.loginService.headers});
  }

  updateCourse(course: Course) : Observable<Course>{
    return this.http.post<Course>(this.UPDATE_COURSE, course, {headers: this.loginService.headers});
  }

  deleteCourse(course: Course) : Observable<any>{
    return this.http.delete(this.DELETE_COURSE + course.id.toString(), {headers: this.loginService.headers});
  }

}
