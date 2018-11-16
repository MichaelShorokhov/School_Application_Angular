import { Component, OnInit } from '@angular/core';
import {Term} from "../model/term";
import {TermService} from "../shared/term.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {
terms : Term[] = [];
newTerm: Term;

  constructor(private service : TermService, private translate: TranslateService) { }

  ngOnInit() {
    this.getAllTerms();
    this.newTerm = new Term();
  }

  public getAllTerms(){
    this.service.getAllTerms().subscribe(
      res => {
        this.terms = res;
      },
      err =>{
        alert(this.translate.instant("error.gettingTermList"))
      }
    )
  }


  addTerm() {
    this.service.addTerm(this.newTerm).subscribe(
      res =>{
        this.newTerm.id = res.id;
        this.terms.push(this.newTerm);
        this.newTerm = new Term();
      },
      err => {
        alert(this.translate.instant("error.add"))
      });
  }

  updateTerm(updatedTerm : Term) {
    this.service.updateTerm(updatedTerm).subscribe(
      res=>{

      },
      err=>{
        alert(this.translate.instant("error.update"))
      }
    )
  }

  deleteTerm(term: Term) {
    this.service.deleteTerm(term).subscribe(
      res =>{
        let indexOfTerm = this.terms.indexOf(term);
        this.terms.splice(indexOfTerm,1)
      },
      err =>{
        alert(this.translate.instant("error.delete"))
      }
    )
  }

  closeTerm(updatedTerm : Term) {
    this.service.closeTerm(updatedTerm).subscribe(
      res=>{

      },
      err=>{
        alert(this.translate.instant("error.closingTerm"))
      }
    )
  }


}
