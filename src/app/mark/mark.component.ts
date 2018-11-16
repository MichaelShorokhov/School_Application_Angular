import { Component, OnInit } from '@angular/core';
import {MarkService} from "../shared/mark.service";
import {Mark} from "../model/mark";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  marks: Mark[] = [];
  newMark: Mark;

  constructor(private markService : MarkService, private translate: TranslateService) {}

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
        alert(this.translate.instant("error.gettingMarkList"))
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
        alert(this.translate.instant("error.add"))
      });
  }

  updateMark(updatedMark : Mark) {
    this.markService.updateMark(updatedMark).subscribe(
        res=>{

    },
      err=>{
          alert(this.translate.instant("error.update"))
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
          alert(this.translate.instant("error.delete"))
        }
      )
  }
}

