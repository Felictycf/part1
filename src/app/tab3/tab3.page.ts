import { Component } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {CarService} from "../service/CarSerive";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
   _registrationNumber:string="";

   _carMark:string;
   _year:number;
   _odometer:string;
   _transmissionsType:string;
   _bodyTree:string;
   _rentalPrice:number;
   _currentlyInRent:string;

  constructor(private alertController: AlertController,private carService:CarService) {}

  async presentAlert() {
    this.InsertCar()
    const alert = await this.alertController.create({
      header: 'tips',
      subHeader: 'Create car message',
      message: 'Insert Car successfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  public InsertCar(){
    console.log(this._registrationNumber)
    console.log(this._carMark)
    this.carService.insertCar(this._registrationNumber,this._carMark,this._year,this._odometer,this._transmissionsType,this._bodyTree,this._rentalPrice,this._currentlyInRent)
  }
}
