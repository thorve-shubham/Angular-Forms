import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-template-form',
  templateUrl: './starter-template-form.component.html',
  styleUrls: ['./starter-template-form.component.css']
})
export class StarterTemplateFormComponent implements OnInit {

  public firstName:string;
  public message:string;

  constructor() { }

  ngOnInit(): void {
    this.firstName = "Shubham -byDefault";
  }

  onSubmit(){
    this.message = "You typed "+this.firstName;
  }

}
