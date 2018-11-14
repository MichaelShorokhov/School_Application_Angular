import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "../model/group";
import {Teacher} from "../model/teacher";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class TeacherGroupService {
  private BASE_URL = "http://localhost:8080/teacher";
  private FIND_GROUPS = `${this.BASE_URL}/findGroups`;
  private ADD_GROUP = `${this.BASE_URL}/addGroup/`;
  private REMOVE_GROUP = `${this.BASE_URL}/removeGroup/`;

  constructor( private http: HttpClient) {}

  findGroups(teacher: Teacher): Observable<Group[]>{
    return this.http.post<Group[]>(this.FIND_GROUPS, teacher);
  }
  removeGroup(teacher: Teacher, group: Group): Observable<any>{
    return this.http.post(this.REMOVE_GROUP + teacher.id, group);
  }

  addGroup(teacher: Teacher, group: Group): Observable<Group>{
    return this.http.post<Group>(this.ADD_GROUP + teacher.id, group);
  }

}
