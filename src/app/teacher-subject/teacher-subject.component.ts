import {Component, OnInit } from '@angular/core';
import {Subject} from "../model/subject";
import {TeacherService} from "../shared/teacher.service";
import {Teacher} from "../model/teacher";
import {SubjectService} from "../shared/subject.service";
import {TeacherSubjectService} from "../shared/teacher-subject.service";

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
              private teacherSubjectService: TeacherSubjectService) {
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
        alert("Error while getting teachers");
      }
    )
  }

  getAllSubjects(){
    this.subjectServece.getAllSubjects().subscribe(
      res=>{
        this.subjects = res;
      },
      err =>{
        alert("Error while getting subjects")
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
        alert("Error while getting subjects for teacher")
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
        alert("Error while removing subject")
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
        alert("Error while adding subject")
      }
    )
  }

}
