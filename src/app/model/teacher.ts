import {Subject} from "./subject";
import {Group} from "./group";
import {Type} from "@angular/core";

export class Teacher{
    id: number;
    name: string;
    surname: string;
    age: number;
    phoneNumber: string;
    subjects: Subject[];
    groups: Group[];

  constructor(){
  // this.id = 0;
  // this.name = "";
  // this.surname = "";
  // this.age = 0;
  // this.phoneNumber = "";
  // this.groups = null;
  // this.subjects = null;
}
}
