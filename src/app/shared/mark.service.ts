import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {Mark} from "../model/mark";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
  private BASE_URL = "http://localhost:8080/mark";
  public ALL_MARKS = `${this.BASE_URL}/findAll`;
  public ADD_MARK = `${this.BASE_URL}/add`;
  public UPDATE_MARK = `${this.BASE_URL}/update`;
  public DELETE_MARK = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllMarks(): Observable<Mark[]>{
    return this.http.get<Mark[]>(this.ALL_MARKS, {headers: this.loginService.headers});
  }

  addMark(mark: Mark) : Observable<Mark>{
    return this.http.post<Mark>(this.ADD_MARK, mark, {headers: this.loginService.headers});
  }

  updateMark(mark: Mark) : Observable<Mark>{
    return this.http.post<Mark>(this.UPDATE_MARK, mark, {headers: this.loginService.headers});
  }

  deleteMark(mark: Mark) : Observable<any>{
    return this.http.delete(this.DELETE_MARK + mark.id.toString(), {headers: this.loginService.headers});
  }


}
