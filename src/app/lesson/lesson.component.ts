import { Component, OnInit } from '@angular/core';
import {log} from "util";
import {Lesson} from "../model/lesson";
import {LessonService} from "../shared/lesson.service";
import {SubjectService} from "../shared/subject.service";
import {TermService} from "../shared/term.service";
import {TeacherService} from "../shared/teacher.service";
import {GroupService} from "../shared/group.service";
import {Subject} from "../model/subject";
import {Term} from "../model/term";
import {Group} from "../model/group";
import {Teacher} from "../model/teacher";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons: Lesson[] = [];
  subjects: Subject[] = [];
  terms: Term[] = [];
  teachers: Teacher[] = [];
  groups: Group[] = [];
  newLesson: Lesson;
  isDataAvailable: boolean = false;

  constructor(private service : LessonService, private subjectService: SubjectService, private termService : TermService,
              private teacherService : TeacherService, private groupService : GroupService) {
    this.getAllSources();
  }

  ngOnInit() {
    this.newLesson = new Lesson();
  }

  public getAllLessons(){
    this.service.getAllLessons().subscribe(
      res => {
        this.lessons = res;
      },
      err =>{
        alert("Error")
      }
    )
  }
  public getAllSubjects(){
    this.subjectService.getAllSubjects().subscribe(
      data => {
        this.subjects = data;
      },
      err =>{
        alert("Error Subj")
      }
    )
  }
  public getAllTerms(){
    this.termService.getAllTerms().subscribe(
      res => {
        this.terms = res;
      },
      err =>{
        alert("Error term")
      }
    )
  }
  public getAllTeachers(){
    this.teacherService.getAllTeachers().subscribe(
      res => {
        this.teachers = res;
      },
      err =>{
        alert("Error teach")
      }
    )
  }
  public getAllGroups(){
    this.groupService.getAllGroups().subscribe(
      res => {
        this.groups = res;
      },
      err =>{
        alert("Error gr")
      }
    )
  }

  public getAllSources(){
  this.getAllLessons();
  this.getAllSubjects();
  this.getAllGroups();
  this.getAllTeachers();
  this.getAllTerms()
}


  addLesson() {
    this.service.addLesson(this.newLesson).subscribe(
      res =>{
        this.newLesson.id = res.id;
        this.lessons.push(this.newLesson);
        this.newLesson = new Lesson();
      },
      err => {
        alert("Error while adding")
      });
  }

  updateLesson(updatedLesson : Lesson) {
    this.service.updateLesson(updatedLesson).subscribe(
      res=>{
      },
      err=>{
        alert("Error while updating")
      }
    )
  }

  deleteLesson(lesson: Lesson) {
    this.service.deleteLesson(lesson).subscribe(
      res =>{
        let indexOfLesson = this.lessons.indexOf(lesson);
        this.lessons.splice(indexOfLesson,1)
      },
      err =>{
        alert("Error while deleting")
      }
    )
  }

  compareById(obj1, obj2){
    return obj1.id===obj2.id;
  }



}
