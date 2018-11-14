import { Component, OnInit } from '@angular/core';
import {Group} from "../model/group";
import {TeacherService} from "../shared/teacher.service";
import {Teacher} from "../model/teacher";
import {GroupService} from "../shared/group.service";
import {TeacherGroupService} from "../shared/teacher-group.service";

@Component({
  selector: 'app-teacher-group',
  templateUrl: './teacher-group.component.html',
  styleUrls: ['./teacher-group.component.css']
})
export class TeacherGroupComponent implements OnInit {
  teachers: Teacher[] = [];
  groups: Group[] = [];
  selectedTeacher: Teacher;
  selectedGroup: Group;
  groupsByTeacher: Group[] = [];

  constructor(private teacherService: TeacherService, private groupServece: GroupService,
              private teacherGroupService: TeacherGroupService) {
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

  getAllGroups(){
    this.groupServece.getAllGroups().subscribe(
      res=>{
        this.groups = res;
      },
      err =>{
        alert("Error while getting groups")
      }
    )
  }

  getAllSources(){
    this.getAllTeachers();
    this.getAllGroups();
  }

  getGroupsByTeacher(teacher: Teacher){
    this.teacherGroupService.findGroups(teacher).subscribe(
      res=>{
        this.groupsByTeacher = res;
      },
      err=>{
        alert("Error while getting groups for teacher")
      }
    )
  }

  removeGroup(group: Group){
    this.teacherGroupService.removeGroup(this.selectedTeacher, group).subscribe(
      res=>{
        let indexOfGroup = this.groupsByTeacher.indexOf(group);
        this.groupsByTeacher.splice(indexOfGroup, 1);
      },
      err=>{
        alert("Error while removing group")
      }
    )
  }

  addGroup(){
    this.teacherGroupService.addGroup(this.selectedTeacher, this.selectedGroup).subscribe(
      res=>{
        this.selectedGroup.id = res.id;
        this.groupsByTeacher.push(this.selectedGroup)
      },
      err=>{
        alert("Error while adding group")
      }
    )
  }

}
