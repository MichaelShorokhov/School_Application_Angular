import { Component, OnInit } from '@angular/core';
import {Teacher} from "../model/teacher";
import {TeacherService} from "../shared/teacher.service";


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
  newTeacher: Teacher;

  constructor(private teacherService : TeacherService) {}

  ngOnInit() {
    this.getAllTeachers();
    this.newTeacher = new Teacher();
  }

  public getAllTeachers(){
    this.teacherService.getAllTeachers().subscribe(

      res => {
        this.teachers = res;
      },
      err =>{
        alert("Error")
      }
    )
  }


  addTeacher() {
    this.teacherService.addTeacher(this.newTeacher).subscribe(
      res =>{
        this.newTeacher.id = res.id;
        this.teachers.push(this.newTeacher);
        this.newTeacher = new Teacher();
      },
      err => {
        alert("Error while adding")
      });
  }

  updateTeacher(updatedTeacher : Teacher) {
    this.teacherService.updateTeacher(updatedTeacher).subscribe(
      res=>{

      },
      err=>{
        alert("Error while updating")
      }
    )
  }

  deleteTeacher(teacher: Teacher) {
    this.teacherService.deleteTeacher(teacher).subscribe(
      res =>{
        let indexOfTeacher = this.teachers.indexOf(teacher);
        this.teachers.splice(indexOfTeacher,1)
      },
      err =>{
        alert("Error while deleting")
      }
    )
  }

}
