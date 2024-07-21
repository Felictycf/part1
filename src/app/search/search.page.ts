import { Component, OnInit } from '@angular/core';
import {CarService} from "../service/CarSerive";
import {Car} from "../data/Car";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  Carlist:Car[]=[]
  _registrationNumber:string;
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
  public search(){
    this.Carlist=[]
    var allCar = this.carService.getAllCar();
    allCar.forEach((ele:Car)=>{
      if (ele.registrationNumber==this._registrationNumber){
        this.Carlist.push(ele)
      }
    })

  }

  ngOnInit() {
  }

}
