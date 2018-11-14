import {Mark} from "./mark";
import {Lesson} from "./lesson";
import {Student} from "./student";

export class MarkForLesson{
  id: number;
  mark: Mark;
  lesson: Lesson;
  student: Student;

  constructor(){
    // this.id = 0;
    // this.mark = new Mark();
    // this.lesson = new Lesson();
    // this.student = new Student();
  }
}
