import { Component, OnInit } from '@angular/core';
import {Subject} from "../model/subject";
import {SubjectService} from "../shared/subject.service";
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[] = [];
  newSubject: Subject;

  constructor(private service : SubjectService, private translate: TranslateService) { }

  ngOnInit() {
    this.getAllSubjects();
    this.newSubject = new Subject();
  }

  public getAllSubjects(){
    this.service.getAllSubjects().subscribe(
      res => {
        this.subjects = res;
      },
      err =>{
        alert(this.translate.instant("error.gettingSubjectList"))
      }
    )
  }


  addSubject() {
    this.service.addSubject(this.newSubject).subscribe(
      res =>{
        this.newSubject.id = res.id;
        this.subjects.push(this.newSubject);
        this.newSubject = new Subject();
      },
      err => {
        alert(this.translate.instant("error.add"))
      });
  }

  updateSubject(updatedSubject : Subject) {
    this.service.updateSubject(updatedSubject).subscribe(
      res=>{

      },
      err=>{
        alert(this.translate.instant("error.update"))
      }
    )
  }

  deleteSubject(subject: Subject) {
    this.service.deleteSubject(subject).subscribe(
      res =>{
        let indexOfSubject = this.subjects.indexOf(subject);
        this.subjects.splice(indexOfSubject,1)
      },
      err =>{
        alert(this.translate.instant("error.delete"))
      }
    )
  }

}
