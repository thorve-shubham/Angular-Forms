import { Component, OnInit } from '@angular/core';
import { Hero } from '../Shared/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public hero:Hero;
  public submitted :boolean = false;
  public powers:string[];

  constructor() {
    
  }

  ngOnInit(): void {
    this.hero = new Hero("Saitama","NO EGO","Punch");
    this.powers = ["Punch","Martial Art","Cyborg","Healer"];
  }

  onSubmit(){
    this.submitted=true;
  }

}
