import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/startertemplateform'},
  {path : 'startertemplateform', component :StarterTemplateFormComponent},
  {path : 'templateform', component: TemplateFormComponent},
  {path : 'starterreactiveform', component: StarterReactiveFormComponent},
  {path : 'reactiveform', component: ReactiveFormComponent},
  {path : 'basicform', component : BasicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
