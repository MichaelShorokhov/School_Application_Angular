import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MarkForLesson} from "../model/markForLesson";
import {Observable} from "rxjs/index";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MarkForLessonService {

  private BASE_URL = "http://localhost:8080/marksForLesson";
  public ALL_MARK_FOR_LESSONS = `${this.BASE_URL}/findAll`;
  public ADD_MARK_FOR_LESSON = `${this.BASE_URL}/add`;
  public UPDATE_MARK_FOR_LESSON = `${this.BASE_URL}/update`;
  public DELETE_MARK_FOR_LESSON = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllMarksForLessons(): Observable<MarkForLesson[]>{
    return this.http.get<MarkForLesson[]>(this.ALL_MARK_FOR_LESSONS, {headers: this.loginService.headers});
  }

  addMarkForLesson(markForLesson: MarkForLesson) : Observable<MarkForLesson>{
      return this.http.post<MarkForLesson>(this.ADD_MARK_FOR_LESSON, markForLesson, {headers: this.loginService.headers});
  }

  updateMarkForLesson(markForLesson: MarkForLesson) : Observable<MarkForLesson>{
    return this.http.post<MarkForLesson>(this.UPDATE_MARK_FOR_LESSON, markForLesson, {headers: this.loginService.headers});
  }

  deleteMarkForLesson(markForLesson: MarkForLesson) : Observable<any>{
    return this.http.delete(this.DELETE_MARK_FOR_LESSON + markForLesson.id.toString(), {headers: this.loginService.headers});
  }
}

