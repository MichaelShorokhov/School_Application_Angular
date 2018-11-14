import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../shared/student.service";
import {Group} from "../model/group";
import {GroupService} from "../shared/group.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  groups: Group[] = [];
  newStudent: Student;

  constructor(private studentService : StudentService, private groupService: GroupService) {
    this.getAllSources();
  }

  ngOnInit() {
    this.newStudent = new Student();
  }

  public getAllStudents(){
    this.studentService.getAllStudents().subscribe(

      res => {
        this.students = res;
      },
      err =>{
        alert("Error")
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
    this.getAllGroups();
    this.getAllStudents();
  }


  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(
      res =>{
        this.newStudent.id = res.id;
        this.students.push(this.newStudent);
        this.newStudent = new Student();
      },
      err => {
        alert("Error while adding")
      });
  }

  updateStudent(updatedStudent : Student) {
    console.log(updatedStudent);
    this.studentService.updateStudent(updatedStudent).subscribe(
      res=>{
      },
      err=>{
        alert("Error while updating")
      }
    )
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student).subscribe(
      res =>{
        let indexOfStudent = this.students.indexOf(student);
        this.students.splice(indexOfStudent,1)
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
