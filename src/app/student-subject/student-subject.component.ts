import { Component, OnInit } from '@angular/core';
import {StudentService} from "../shared/student.service";
import {SubjectService} from "../shared/subject.service";
import {StudentSubjectService} from "../shared/student-subject.service";
import {Student} from "../model/student";
import {Subject} from "../model/subject";
import {Teacher} from "../model/teacher";

@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent implements OnInit {
  students: Student[] = [];
  subjects: Subject[] = [];
  selectedStudent: Student;
  selectedSubject: Subject;
  subjectsByStudent: Subject[] = [];

  constructor(private studentService: StudentService, private subjectServece: SubjectService,
                      private studentSubjectService: StudentSubjectService) {
        this.getAllSources();
  }

  ngOnInit() {
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe(
      res=>{
        this.students = res;
      },
      err =>{
        alert("Error while getting students");
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
    this.getAllStudents();
    this.getAllSubjects();
  }

  getSubjectsByStudent(student: Student){
    this.studentSubjectService.findSubjects(student).subscribe(
      res=>{
        this.subjectsByStudent = res;
      },
      err=>{
        alert("Error while getting subjects for student")
      }
    )
  }

  removeSubject(subject: Subject){
    this.studentSubjectService.removeSubject(this.selectedStudent, subject).subscribe(
      res=>{
        let indexOfSubject = this.subjectsByStudent.indexOf(subject);
        this.subjectsByStudent.splice(indexOfSubject, 1);
      },
      err=>{
        alert("Error while removing subject")
      }
    )
  }

  addSubject(){
    this.studentSubjectService.addSubject(this.selectedStudent, this.selectedSubject).subscribe(
      res=>{
        this.selectedSubject.id = res.id;
        this.subjectsByStudent.push(this.selectedSubject)
      },
      err=>{
        alert("Error while adding subject")
      }
    )
  }

}
