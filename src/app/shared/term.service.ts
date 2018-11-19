import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Term} from "../model/term";
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TermService {
  private BASE_URL = "http://localhost:8080/term";
  public ALL_TERMS = `${this.BASE_URL}/findAll`;
  public ADD_TERM = `${this.BASE_URL}/add`;
  public UPDATE_TERM = `${this.BASE_URL}/update`;
  public DELETE_TERM = `${this.BASE_URL}/remove/`;
  public CLOSE_TERM = `${this.BASE_URL}/close`;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAllTerms() :Observable<Term[]>{
    return this.http.get<Term[]>(this.ALL_TERMS, {headers: this.loginService.headers})
  }

  addTerm(term: Term) : Observable<Term>{
    return this.http.post<Term>(this.ADD_TERM, term, {headers: this.loginService.headers});
  }

  updateTerm(term: Term) : Observable<Term>{
    return this.http.post<Term>(this.UPDATE_TERM, term, {headers: this.loginService.headers});
  }

  deleteTerm(term: Term) : Observable<any>{
    return this.http.delete(this.DELETE_TERM + term.id.toString(), {headers: this.loginService.headers});
  }

  closeTerm(term: Term) : Observable<Term>{
    return this.http.post<Term>(this.CLOSE_TERM, term, {headers: this.loginService.headers});
  }
}
