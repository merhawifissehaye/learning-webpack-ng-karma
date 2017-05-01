import { Component } from '@angular/core';
import { Question, FormData } from '../../models';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'dynamic-form-app',
  template: require('./app-component.html')
})
export class AppComponent {
  form: FormData;

  constructor(private formService: FormService) {
    formService.setForms([
        {
          id: 1,
          questions: [
            {
              controlType: 'text',
              id: 'first',
              label: 'My First',
              options: [],
              required: false
            }
          ],
          title: 'Pizza perfection'
        },
        {
          id: 2,
          questions: [
            {
              controlType: 'text',
              id: 'second',
              label: 'Second!',
              options: [],
              required: true
            }
          ],
          title: 'Burger Hot'
        }
    ])
  }
}