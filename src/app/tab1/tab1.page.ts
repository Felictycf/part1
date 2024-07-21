import { Component } from '@angular/core';
import {CarService} from "../service/CarSerive";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	swipeNumber: number = 0;
	swipeLeftNumber: number = 0;
	tapNumber: number = 0;
	doubleTapNumber: number = 0;
	pressNumber: number = 0;


  private _registrationNumber:string;
  private _carMark:string;
  private _year:number;
  private _odometer:string;
  private _transmissionsType:string;
  private _bodyTree:string;
  private _rentalPrice:number;
  private _currentlyInRent:string;



  constructor(private carService:CarService) {

  }
  doSwipe(){
	  this.swipeNumber++;
  }
  doSwipeLeft(){
	  this.swipeLeftNumber++;
  }
  doTap(){
	  this.tapNumber++;
  }
  doDoubleTap(){
	  this.doubleTapNumber++;
  }
  doPress(){
	  this.pressNumber++;
  }

}
