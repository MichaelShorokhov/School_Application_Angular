import { Component, OnInit } from '@angular/core';
import {CourseService} from "../shared/course.service";
import {Course} from "../model/course";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  newCourse: Course;
  blabla;

  constructor(private service : CourseService, private translate: TranslateService) { }

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
        alert(this.translate.instant("error.gettingCourseList"))
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
        alert(this.translate.instant("error.add"))
      });
  }

  updateCourse(updatedCourse : Course) {
    this.service.updateCourse(updatedCourse).subscribe(
      res=>{

      },
      err=>{
        alert(this.translate.instant("error.update"))
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
        alert(this.translate.instant("error.delete"))
      }
    )
  }

}
