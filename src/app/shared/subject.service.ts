import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../model/subject";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private BASE_URL = "http://localhost:8080/subject";
  public ALL_SUBJECTS = `${this.BASE_URL}/findAll`;
  public ADD_SUBJECT = `${this.BASE_URL}/add`;
  public UPDATE_SUBJECT = `${this.BASE_URL}/update`;
  public DELETE_SUBJECT = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.ALL_SUBJECTS, {headers: this.loginService.headers});
  }

  addSubject(subject: Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.ADD_SUBJECT, subject, {headers: this.loginService.headers});
  }

  updateSubject(subject: Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.UPDATE_SUBJECT, subject, {headers: this.loginService.headers});
  }

  deleteSubject(subject: Subject) : Observable<any>{
    return this.http.delete(this.DELETE_SUBJECT + subject.id.toString(), {headers: this.loginService.headers});
  }
}
