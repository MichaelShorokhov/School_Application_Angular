import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../model/teacher";
import {Subject} from "../model/subject";
import {Group} from "../model/group";
import {headersToString} from "selenium-webdriver/http";
import {Headers} from "@angular/http";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private BASE_URL = "http://localhost:8080/teacher";
  public ALL_TEACHERS = `${this.BASE_URL}/findAll`;
  public ADD_TEACHER = `${this.BASE_URL}/add`;
  public UPDATE_TEACHER = `${this.BASE_URL}/update`;
  public DELETE_TEACHER = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.ALL_TEACHERS, {headers: this.loginService.headers});
  }

  addTeacher(teacher: Teacher) : Observable<Teacher>{
    return this.http.post<Teacher>(this.ADD_TEACHER, teacher, {headers: this.loginService.headers});
  }

  updateTeacher(teacher: Teacher) : Observable<Teacher>{
    return this.http.post<Teacher>(this.UPDATE_TEACHER, teacher, {headers: this.loginService.headers});
  }

  deleteTeacher(teacher: Teacher) : Observable<any>{
    return this.http.delete(this.DELETE_TEACHER + teacher.id.toString(), {headers: this.loginService.headers});
  }

}
