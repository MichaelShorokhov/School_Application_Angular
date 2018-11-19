import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Group} from "../model/group";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private BASE_URL = "http://localhost:8080/group";
  public ALL_GROUPS = `${this.BASE_URL}/findAll`;
  public ADD_GROUP = `${this.BASE_URL}/add`;
  public UPDATE_GROUP = `${this.BASE_URL}/update`;
  public DELETE_GROUP = `${this.BASE_URL}/remove/`;

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getAllGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.ALL_GROUPS, {headers: this.loginService.headers});
  }

  addGroup(group: Group) : Observable<Group>{
    return this.http.post<Group>(this.ADD_GROUP, group, {headers: this.loginService.headers});
  }

  updateGroup(group: Group) : Observable<Group>{
    return this.http.post<Group>(this.UPDATE_GROUP, group, {headers: this.loginService.headers});
  }

  deleteGroup(group: Group) : Observable<any>{
    return this.http.delete(this.DELETE_GROUP + group.id.toString(), {headers: this.loginService.headers});
  }
}
