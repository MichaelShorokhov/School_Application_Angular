import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { MarkComponent } from './mark/mark.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TermComponent } from './term/term.component';
import { CourseComponent } from './course/course.component';
import { GroupComponent } from './group/group.component';
import { MarkForLessonComponent } from './mark-for-lesson/mark-for-lesson.component';
import { SubjectComponent } from './subject/subject.component';
import { LessonComponent } from './lesson/lesson.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { TeacherGroupComponent } from './teacher-group/teacher-group.component';
import { TeacherSubjectComponent } from './teacher-subject/teacher-subject.component';
import { StudentSubjectComponent } from './student-subject/student-subject.component';

const appRoutes: Routes = [
  {
    path: 'mark',
    component: MarkComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'lesson',
    component: LessonComponent
  },
  {
    path: 'marksForLesson',
    component: MarkForLessonComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'term',
    component: TermComponent
  },
  {
    path: 'teacher_group',
    component: TeacherGroupComponent
  },
  {
    path: 'teacher_subject',
    component: TeacherSubjectComponent
  },
  {
    path: 'student_subject',
    component: StudentSubjectComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MarkComponent,
    StudentComponent,
    TeacherComponent,
    TermComponent,
    CourseComponent,
    GroupComponent,
    MarkForLessonComponent,
    SubjectComponent,
    LessonComponent,
    NavigationComponent,
    TeacherGroupComponent,
    TeacherSubjectComponent,
    StudentSubjectComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
