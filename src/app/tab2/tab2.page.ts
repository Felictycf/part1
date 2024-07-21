import { Component } from '@angular/core';
import {CarService} from "../service/CarSerive";
import {Car} from "../data/Car";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {



  Carlist:Car[]=[]
  private _registrationNumber:string;
  private _carMark:string;
  private _year:number;
  private _odometer:string;
  private _transmissionsType:string;
  private _bodyTree:string;
  private _rentalPrice:number;
  private _currentlyInRent:string;


  constructor(private carService:CarService) {
    this.getCarList()
    console.log(this.Carlist)
  }

  public getCarList(){
    var allCar = this.carService.getAllCar();
    this.Carlist=allCar;
  }



}
