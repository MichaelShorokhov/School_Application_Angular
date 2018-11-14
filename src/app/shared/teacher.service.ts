import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../model/teacher";
import {Subject} from "../model/subject";
import {Group} from "../model/group";
import {headersToString} from "selenium-webdriver/http";
import {Headers} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private BASE_URL = "http://localhost:8080/teacher";
  public ALL_TEACHERS = `${this.BASE_URL}/findAll`;
  public ADD_TEACHER = `${this.BASE_URL}/add`;
  public UPDATE_TEACHER = `${this.BASE_URL}/update`;
  public DELETE_TEACHER = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.ALL_TEACHERS);
  }

  addTeacher(teacher: Teacher) : Observable<Teacher>{
    return this.http.post<Teacher>(this.ADD_TEACHER, teacher);
  }

  updateTeacher(teacher: Teacher) : Observable<Teacher>{
    return this.http.post<Teacher>(this.UPDATE_TEACHER, teacher );
  }

  deleteTeacher(teacher: Teacher) : Observable<any>{
    return this.http.delete(this.DELETE_TEACHER + teacher.id.toString());
  }

}
