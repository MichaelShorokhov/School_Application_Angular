import {Component, OnInit} from '@angular/core';
import {MarkForLessonService} from "../shared/mark-for-lesson.service";
import {MarkForLesson} from "../model/markForLesson";
import {Lesson} from "../model/lesson";
import {Student} from "../model/student";
import {Mark} from "../model/mark";
import {MarkService} from "../shared/mark.service";
import {LessonService} from "../shared/lesson.service";
import {StudentService} from "../shared/student.service";

@Component({
  selector: 'app-mark-for-lesson',
  templateUrl: './mark-for-lesson.component.html',
  styleUrls: ['./mark-for-lesson.component.css']
})
export class MarkForLessonComponent implements OnInit {

  markForLessons: MarkForLesson[] = [];
  marks: Mark[] = [];
  lessons: Lesson[] = [];
  students: Student[] = [];
  newMarkForLesson: MarkForLesson;

  constructor(private service : MarkForLessonService, private markService: MarkService,
              private lessonService : LessonService, private studentService : StudentService) {

  }

  ngOnInit() {
    this.newMarkForLesson = new MarkForLesson();
    this.getAllSources();
  }

  public getAllMarkForLessons(){
    this.service.getAllMarksForLessons().subscribe(
      res => {
        this.markForLessons = res;
      },
      err =>{
        alert("Error")
      }
    )
  }
  public getAllMarks(){
    this.markService.getAllMarks().subscribe(
      res => {
        this.marks = res;
      },
      err =>{
        alert("Error mark")
      }
    )
  }
  public getAllLessons(){
    this.lessonService.getAllLessons().subscribe(
      res => {
        this.lessons = res;
      },
      err =>{
        alert("Error lesson")
      }
    )
  }
  public getAllStudents(){
    this.studentService.getAllStudents().subscribe(
      res => {
        this.students = res;
      },
      err =>{
        alert("Error students")
      }
    )
  }


  public getAllSources(){
    this.getAllMarkForLessons();
    this.getAllMarks();
    this.getAllLessons();
    this.getAllStudents();
  }


  addMarkForLesson() {
    if (this.isDataValid(this.newMarkForLesson)){
    this.service.addMarkForLesson(this.newMarkForLesson).subscribe(
      res =>{
          this.newMarkForLesson.id = res.id;
          this.markForLessons.push(this.newMarkForLesson);
          this.newMarkForLesson = new MarkForLesson();
      },
      err => {
        alert("Error while adding")
      });
    } else alert("Invalid Data")
  }

  updateMarkForLesson(updatedMarkForLesson : MarkForLesson) {
    if(this.isDataValid(updatedMarkForLesson)){
    this.service.updateMarkForLesson(updatedMarkForLesson).subscribe(
      res=>{
      },
      err=>{
        alert("Error while updating")
      }
      )
    } else alert("Invalid Data")
  }

  deleteMarkForLesson(markForLesson: MarkForLesson) {
    this.service.deleteMarkForLesson(markForLesson).subscribe(
      res =>{
        let indexOfMarkForLesson = this.markForLessons.indexOf(markForLesson);
        this.markForLessons.splice(indexOfMarkForLesson,1)
      },
      err =>{
        alert("Error while deleting")
      }
    )
  }

  compareById(obj1: any, obj2: any): boolean{
    return obj1 && obj2 ? obj1.id===obj2.id || obj1===obj2.id: obj1===obj2;
  }

  isDataValid(markForLesson: MarkForLesson): boolean{
    if(markForLesson.student.group.id==markForLesson.lesson.group.id){return true}
    return false;
  }



}
