import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-starter-reactive-form',
  templateUrl: './starter-reactive-form.component.html',
  styleUrls: ['./starter-reactive-form.component.css']
})
export class StarterReactiveFormComponent implements OnInit {

  public myForm : FormGroup;
  public firstName : string;
  public message : string;

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.firstName = "Shubham - by default";

    this.myForm = this.formBuilder.group({
      fName : [this.firstName, Validators.required]
    });
  }

  onSubmit(fGroup : FormGroup){
    this.message = "You typed "+fGroup.controls.fName.value;
  }

}
