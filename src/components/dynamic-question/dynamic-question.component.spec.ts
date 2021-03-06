import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Question } from '../../models';
import { DynamicQuestionComponent } from './dynamic-question.component';

describe('Component: DynamicQuestionsComponent', () => {
  let component: DynamicQuestionComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQuestionComponent ],
      imports: [ ReactiveFormsModule ]
    });

    const fixture = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
  });

  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('test');

    component.control = formControl;
    expect(component.isValid).toBe(true);
  })
})