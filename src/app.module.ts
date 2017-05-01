import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, DynamicFormComponent, DynamicQuestionComponent } from './components';
import { FormService } from './services/form.service';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicQuestionComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ FormService ]
})
export class AppModule {}