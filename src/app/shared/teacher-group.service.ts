import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "../model/group";
import {Teacher} from "../model/teacher";
import {Observable} from "rxjs/index";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGroupService {
  private BASE_URL = "http://localhost:8080/teacher";
  private FIND_GROUPS = `${this.BASE_URL}/findGroups`;
  private ADD_GROUP = `${this.BASE_URL}/addGroup/`;
  private REMOVE_GROUP = `${this.BASE_URL}/removeGroup/`;

  constructor( private http: HttpClient, private loginService: LoginService) {}

  findGroups(teacher: Teacher): Observable<Group[]>{
    return this.http.post<Group[]>(this.FIND_GROUPS, teacher, {headers: this.loginService.headers});
  }
  removeGroup(teacher: Teacher, group: Group): Observable<any>{
    return this.http.post(this.REMOVE_GROUP + teacher.id, group, {headers: this.loginService.headers});
  }

  addGroup(teacher: Teacher, group: Group): Observable<Group>{
    return this.http.post<Group>(this.ADD_GROUP + teacher.id, group, {headers: this.loginService.headers});
  }

}
