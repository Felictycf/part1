import { Component, OnInit } from '@angular/core';
import {CarService} from "../service/CarSerive";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  id:string="";
  _registrationNumber:string="";
  _carMark:string;
  _year:number;
  _odometer:string;
  _transmissionsType:string;
  _bodyTree:string;
  _rentalPrice:number;
  _currentlyInRent:string;

  constructor(private alertController: AlertController,private carService:CarService) {}

  async delteAalter() {
    const alert = await this.alertController.create({
      header: 'tips',
      subHeader: 'Create car message',
      message: 'delete Car successfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlert() {
    this.update()
    const alert = await this.alertController.create({
      header: 'tips',
      subHeader: 'Create car message',
      message: 'edit Car successfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  public update(){

    console.log(this.id)
    console.log(this._carMark)
    this.carService.updateCar(this.id,this._carMark,this._year,this._odometer,this._transmissionsType,this._bodyTree,this._rentalPrice,this._currentlyInRent)
  }
  public delete(){
  this.delteAalter();
  this.carService.deleteCar(this._registrationNumber)
  }

  ngOnInit(): void {
  }

}
