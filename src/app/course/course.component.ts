import { Component, OnInit } from '@angular/core';
import {CourseService} from "../shared/course.service";
import {Course} from "../model/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  newCourse: Course;

  constructor(private service : CourseService) { }

  ngOnInit() {
    this.getAllCourses();
    this.newCourse = new Course();
  }

  public getAllCourses(){
    this.service.getAllCourses().subscribe(
      res => {
        this.courses = res;
      },
      err =>{
        alert("Error")
      }
    )
  }


  addCourse() {
    this.service.addCourse(this.newCourse).subscribe(
      res =>{
        this.newCourse.id = res.id;
        this.courses.push(this.newCourse);
        this.newCourse = new Course();
      },
      err => {
        alert("Error while adding")
      });
  }

  updateCourse(updatedCourse : Course) {
    this.service.updateCourse(updatedCourse).subscribe(
      res=>{

      },
      err=>{
        alert("Error while updating")
      }
    )
  }

  deleteCourse(course: Course) {
    this.service.deleteCourse(course).subscribe(
      res =>{
        let indexOfCourse = this.courses.indexOf(course);
        this.courses.splice(indexOfCourse,1)
      },
      err =>{
        alert("Error while deleting")
      }
    )
  }

}
