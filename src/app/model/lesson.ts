import {Term} from "./term";
import {Group} from "./group";
import {Teacher} from "./teacher";
import {Subject} from "./subject";

export class Lesson{
  id: number;
  date: Date;
  subject: Subject;
  term: Term;
  teacher: Teacher;
  group: Group;
  constructor(){
    // this.id = 0;
    // this.date = new Date(0);
    // this.subject = new Subject();
    // this.term = new Term();
    // this.teacher = new Teacher();
    // this.group = new Group();
  }
}
