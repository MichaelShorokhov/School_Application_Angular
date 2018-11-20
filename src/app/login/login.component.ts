import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private service: LoginService) {
  }

  getCredentials() {
    return this.credentials;
}

  login(){
    this.service.authenticate(this.credentials);
  }

  logout(){
    this.credentials = {username: '', password: ''};
    this.service.logout();
  }

}
