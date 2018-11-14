import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Subject} from "../model/subject";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentSubjectService {
  private BASE_URL = "http://localhost:8080/student";
  private FIND_SUBJECTS = `${this.BASE_URL}/findSubjects`;
  private ADD_SUBJECT = `${this.BASE_URL}/addSubject/`;
  private REMOVE_SUBJECT = `${this.BASE_URL}/removeSubject/`;

  constructor( private http: HttpClient) {}

  findSubjects(student: Student): Observable<Subject[]>{
    return this.http.post<Subject[]>(this.FIND_SUBJECTS, student);
  }
  removeSubject(student: Student, subject: Subject): Observable<any>{
    return this.http.post(this.REMOVE_SUBJECT + student.id, subject);
  }

  addSubject(student: Student, subject: Subject): Observable<Subject>{
    return this.http.post<Subject>(this.ADD_SUBJECT + student.id, subject);
  }

}
