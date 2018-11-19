import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Student} from "../model/student";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private BASE_URL = "http://localhost:8080/student";
  public ALL_STUDENTS = `${this.BASE_URL}/findAll`;
  public ADD_STUDENT = `${this.BASE_URL}/add`;
  public UPDATE_STUDENT = `${this.BASE_URL}/update`;
  public DELETE_STUDENT = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.ALL_STUDENTS, {headers: this.loginService.headers});
  }

  addStudent(student: Student) : Observable<Student>{
    return this.http.post<Student>(this.ADD_STUDENT, student, {headers: this.loginService.headers});
  }

  updateStudent(student: Student) : Observable<Student>{
    return this.http.post<Student>(this.UPDATE_STUDENT, student, {headers: this.loginService.headers});
  }

  deleteStudent(student: Student) : Observable<any>{
    return this.http.delete(this.DELETE_STUDENT + student.id.toString(), {headers: this.loginService.headers});
  }

}
