import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson";
import {Observable} from "rxjs/index";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private BASE_URL = "http://localhost:8080/lesson";
  public ALL_LESSONS = `${this.BASE_URL}/findAll`;
  public ADD_LESSON = `${this.BASE_URL}/add`;
  public UPDATE_LESSON = `${this.BASE_URL}/update`;
  public DELETE_LESSON = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllLessons(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(this.ALL_LESSONS, {headers: this.loginService.headers});
  }

  addLesson(lesson: Lesson) : Observable<Lesson>{
    return this.http.post<Lesson>(this.ADD_LESSON, lesson, {headers: this.loginService.headers});
  }

  updateLesson(lesson: Lesson) : Observable<Lesson>{
    return this.http.post<Lesson>(this.UPDATE_LESSON, lesson, {headers: this.loginService.headers});
  }

  deleteLesson(lesson: Lesson) : Observable<any>{
    return this.http.delete(this.DELETE_LESSON + lesson.id.toString(), {headers: this.loginService.headers});
  }
}

