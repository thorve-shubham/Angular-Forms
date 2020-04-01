import { Component, OnInit } from '@angular/core';
import { Hero } from '../Shared/hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public hero :Hero;
  public newHero : Hero;
  public powers : string[];
  public myForm:FormGroup;
  public submitted:boolean = false;


  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.hero = new Hero("Genos","Competitive","Cyborg");
    this.powers = ["Punch","Martial Art","Cyborg","Healer"];

    this.myForm = this.formBuilder.group({
      fname : [this.hero.name,Validators.required],
      fego : [this.hero.ego,Validators.required],
      fpower : [this.hero.power,Validators.required],
    });
  }

  onSubmit({value}){  //retrieving values only from formGroup ie myForm
    this.submitted=true;
    this.newHero = new Hero(value.fname,value.fego,value.fpower);
    
  }

}
