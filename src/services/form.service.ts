import { Injectable } from '@angular/core';
import { FormData } from '../models';

@Injectable()
export class FormService {
  private forms: Array<FormData> = [];

  getAllForms() {
    return this.forms;
  }

  setForms(forms: Array<FormData>) {
    this.forms = forms;
  }

  getForm(id: number): FormData {
    let form = this.forms.find((form) => form.id === id);
    if(!form) {
      form = null;
    }
    return form;
  }
}