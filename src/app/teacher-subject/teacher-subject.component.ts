import {Component, OnInit } from '@angular/core';
import {Subject} from "../model/subject";
import {TeacherService} from "../shared/teacher.service";
import {Teacher} from "../model/teacher";
import {SubjectService} from "../shared/subject.service";
import {TeacherSubjectService} from "../shared/teacher-subject.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.css']
})
export class TeacherSubjectComponent implements OnInit {
  teachers: Teacher[] = [];
  subjects: Subject[] = [];
  selectedTeacher: Teacher;
  selectedSubject: Subject;
  subjectsByTeacher: Subject[] = [];

  constructor(private teacherService: TeacherService, private subjectServece: SubjectService,
              private teacherSubjectService: TeacherSubjectService, private translate: TranslateService) {
    this.getAllSources();
  }

  ngOnInit() {
  }

  getAllTeachers(){
    this.teacherService.getAllTeachers().subscribe(
      res=>{
        this.teachers = res;
      },
      err =>{
        alert(this.translate.instant("error.gettingTeacherList"));
      }
    )
  }

  getAllSubjects(){
    this.subjectServece.getAllSubjects().subscribe(
      res=>{
        this.subjects = res;
      },
      err =>{
        alert(this.translate.instant("error.gettingSubjectList"))
      }
    )
  }

  getAllSources(){
    this.getAllTeachers();
    this.getAllSubjects();
  }

  getSubjectsByTeacher(teacher: Teacher){
    this.teacherSubjectService.findSubjects(teacher).subscribe(
      res=>{
        this.subjectsByTeacher = res;
      },
      err=>{
        alert(this.translate.instant("error.getSubjectsByTeacherList"))
      }
    )
  }

  removeSubject(subject: Subject){
    this.teacherSubjectService.removeSubject(this.selectedTeacher, subject).subscribe(
      res=>{
        let indexOfSubject = this.subjectsByTeacher.indexOf(subject);
        this.subjectsByTeacher.splice(indexOfSubject, 1);
      },
      err=>{
        alert(this.translate.instant("error.delete"))
      }
    )
  }

  addSubject(){
    this.teacherSubjectService.addSubject(this.selectedTeacher, this.selectedSubject).subscribe(
      res=>{
        this.selectedSubject.id = res.id;
        this.subjectsByTeacher.push(this.selectedSubject)
      },
      err=>{
        alert(this.translate.instant("error.add"))
      }
    )
  }

}
