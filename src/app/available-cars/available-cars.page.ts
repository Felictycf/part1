import { Component, OnInit } from '@angular/core';
import {Car} from "../data/Car";
import {CarService} from "../service/CarSerive";

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.page.html',
  styleUrls: ['./available-cars.page.scss'],
})
export class AvailableCarsPage implements OnInit {
  Carlist:Car[]=[]
  _registrationNumber:string;
  private _carMark:string;
  private _year:number;
  private _odometer:string;
  private _transmissionsType:string;
  private _bodyTree:string;
  _rentalPrice:number;
  private _currentlyInRent:string;


  constructor(private carService:CarService) {
    this.getCarList()
    console.log(this.Carlist)
  }

  public getCarList(){
    this.Carlist=[]
    var allCar = this.carService.getAllCar();
    allCar.forEach((ele:Car)=>{
      if (ele.currentlyInRent=="Yes"){
        this.Carlist.push(ele)
      }
    })
  }
  public getAvailable(){
    this.Carlist=[]
    var allCar = this.carService.getAllCar();
    allCar.forEach((ele:Car)=>{
      if (ele.currentlyInRent=="Yes"){
        this.Carlist.push(ele)
      }
    })

  }

  ngOnInit() {
  }


}
