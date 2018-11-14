import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-application-angular';
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
  }
  useLanguage(lang: string){
    this.translate.use(lang)
  }
}
