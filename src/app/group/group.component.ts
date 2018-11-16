import { Component, OnInit } from '@angular/core';
import {GroupService} from "../shared/group.service";
import {Group} from "../model/group";
import {CourseService} from "../shared/course.service";
import {Course} from "../model/course";
import {log} from "util";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[] = [];
  courses: Course[] = [];
  newGroup: Group;

  constructor(private service : GroupService, private courseService: CourseService, private translate: TranslateService) {
    this.getAllGroups();
    this.getAllCourses();
  }

  ngOnInit() {
    this.newGroup = new Group();
  }

  public getAllCourses(){
    this.courseService.getAllCourses().subscribe(
      res=> {
        this.courses = res;
      },
      err=>{
        alert(this.translate.instant("error.gettingCourseList"))
      }
    )
  }

  public getAllGroups(){
    this.service.getAllGroups().subscribe(
      res => {
        this.groups = res;
      },
      err =>{
        alert(this.translate.instant("error.gettingGroupList"))
      }
    )
  }


  addGroup() {
    this.service.addGroup(this.newGroup).subscribe(
      res =>{
        this.newGroup.id = res.id;
        this.groups.push(this.newGroup);
        this.newGroup = new Group();
      },
      err => {
        alert(this.translate.instant("error.add"))
      });
  }

  updateGroup(updatedGroup : Group) {
    this.service.updateGroup(updatedGroup).subscribe(
      res=>{
      },
      err=>{
        alert(this.translate.instant("error.update"))
      }
    )
  }

  deleteGroup(group: Group) {
    this.service.deleteGroup(group).subscribe(
      res =>{
        let indexOfGroup = this.groups.indexOf(group);
        this.groups.splice(indexOfGroup,1)
      },
      err =>{
        alert(this.translate.instant("error.delete"))
      }
    )
  }


  compareById(obj1, obj2){
    return obj1.id===obj2.id;
}

}
