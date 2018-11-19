import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../model/subject";
import {Teacher} from "../model/teacher";
import {Observable} from "rxjs/index";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService {
  private BASE_URL = "http://localhost:8080/teacher";
  private FIND_SUBJECTS = `${this.BASE_URL}/findSubjects`;
  private ADD_SUBJECT = `${this.BASE_URL}/addSubject/`;
  private REMOVE_SUBJECT = `${this.BASE_URL}/removeSubject/`;

  constructor( private http: HttpClient,private loginService: LoginService) {}

  findSubjects(teacher: Teacher): Observable<Subject[]>{
    return this.http.post<Subject[]>(this.FIND_SUBJECTS, teacher, {headers: this.loginService.headers});
  }
  removeSubject(teacher: Teacher, subject: Subject): Observable<any>{
    return this.http.post(this.REMOVE_SUBJECT + teacher.id, subject, {headers: this.loginService.headers});
  }

  addSubject(teacher: Teacher, subject: Subject): Observable<Subject>{
    return this.http.post<Subject>(this.ADD_SUBJECT + teacher.id, subject, {headers: this.loginService.headers});
  }

}
