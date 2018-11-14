import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Subject} from "../model/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private BASE_URL = "http://localhost:8080/subject";
  public ALL_SUBJECTS = `${this.BASE_URL}/findAll`;
  public ADD_SUBJECT = `${this.BASE_URL}/add`;
  public UPDATE_SUBJECT = `${this.BASE_URL}/update`;
  public DELETE_SUBJECT = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient) { }

  getAllSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.ALL_SUBJECTS);
  }

  addSubject(subject: Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.ADD_SUBJECT, subject);
  }

  updateSubject(subject: Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.UPDATE_SUBJECT, subject);
  }

  deleteSubject(subject: Subject) : Observable<any>{
    return this.http.delete(this.DELETE_SUBJECT + subject.id.toString());
  }
}
