import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterTemplateFormComponent,
    TemplateFormComponent,
    StarterReactiveFormComponent,
    ReactiveFormComponent,
    BasicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
