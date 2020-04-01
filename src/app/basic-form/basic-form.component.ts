import { Component, OnInit } from '@angular/core';
import { Hero } from '../Shared/hero';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  public hero:Hero;
  public newHero:Hero;
  public submitted:boolean = false;
  public powers:string[];

  constructor() { }

  ngOnInit(): void {
    this.powers =  ["Punch","Martial Art","Cyborg","Healer"];
  }

  onSubmit(data:Hero){
    this.submitted=true;
    this.newHero = data;
  }

}
