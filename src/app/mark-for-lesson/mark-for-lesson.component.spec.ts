import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkForLessonComponent } from './mark-for-lesson.component';

describe('MarkForLessonComponent', () => {
  let component: MarkForLessonComponent;
  let fixture: ComponentFixture<MarkForLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkForLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkForLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
