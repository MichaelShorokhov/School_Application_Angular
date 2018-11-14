import { Component, OnInit } from '@angular/core';
import {MarkService} from "../shared/mark.service";
import {Mark} from "../model/mark";

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  marks: Mark[] = [];
  newMark: Mark;

  constructor(private markService : MarkService) {}

  ngOnInit() {
    this.getAllMarks();
     this.newMark =new Mark();
  }

  public getAllMarks(){
    this.markService.getAllMarks().subscribe(
      res => {
        this.marks = res;
      },
      err =>{
        alert("Error")
      }
    )
  }


  addMark() {
    this.markService.addMark(this.newMark).subscribe(
      res =>{
        this.newMark.id = res.id;
        this.marks.push(this.newMark);
        this.newMark = new Mark();
      },
      err => {
        alert("Error while adding")
      });
  }

  updateMark(updatedMark : Mark) {
    this.markService.updateMark(updatedMark).subscribe(
        res=>{

    },
      err=>{
          alert("Error while updating")
      }
    )
  }

  deleteMark(mark: Mark) {
      this.markService.deleteMark(mark).subscribe(
        res =>{
          let indexOfMark = this.marks.indexOf(mark);
          this.marks.splice(indexOfMark,1)
        },
        err =>{
          alert("Error while deleting")
        }
      )
  }
}

