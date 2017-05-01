import { Input, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../models';

@Component({
  selector: 'dynamic-form',
  template: require('./dynamic-form.component.html')
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: Array<Question>;

  payload: string;

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.generateForm(this.questions);
  }

  private generateForm(questions: Array<Question>): FormGroup {
    const formControls = questions.reduce(this.generateControl, {});
    return new FormGroup({});
  }

  private generateControl(controls: any, question: Question): Array<FormControl> {
    if(question.required) {
      controls[question.id]= new FormControl(question.value || '', Validators.required);
    } else {
      controls[question.id] = new FormControl(question.value || '');
    }

    return controls;
  }

  submit(): void {
    this.payload = JSON.stringify(this.formGroup.value);
  }
}