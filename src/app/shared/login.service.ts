import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LOGIN_URL = "http://localhost:8080/login";

  authenticated = true;
  headers;
  constructor(private http: HttpClient,private router: Router) {
  }

  authenticate(credentials){
    const headers = new HttpHeaders(credentials ?
                  {authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) }:{});
    this.http.get(this.LOGIN_URL
      , {headers: headers}
      )
      .subscribe(response => {
        console.log(response);
        if (response['name']){
          this.authenticated = true;
          this.headers = headers;
          console.log(this.authenticated);
          this.router.navigate(['']);
        }else{
          this.authenticated = false;
        }
      }, err=> {
        this.authenticated = false;
        alert("Authentication failed")
      }
    );
  }

  logout(){
    this.authenticated=false;
    this.headers = '';
    this.router.navigate([''])
  }
}
