import{ Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {Car} from "../data/Car"

@Injectable()

export class CarService {
  private carList: Car[] = []

  /**
   * @author Ding Neng
   * This function is used to create a new patient object and add it to the patientList
   */
  constructor() {
  }

  public getAllCar(): Car[] {
    return this.carList;
  }



  public deleteCar(registrationNumber: string) {
    for (let i = 0; i < this.carList.length; i++) {
      const element = this.carList[i].registrationNumber;
      if (element === registrationNumber) {
        this.carList.splice(i, 1)
      }
    }
    window.alert("delelte car Id is " + registrationNumber + " delete successfully")
  }


  public updateCar(id: string, carMark: string, year: number, odometer: string, transmissionsType: string, bodyTree: string, rentalPrice: number, currentlyRent: string) {
    const updateCart = new Car(id, carMark, year, odometer, transmissionsType, bodyTree, rentalPrice, currentlyRent)
    this.carList.forEach((car: Car) => {
      if (car.registrationNumber === id) {
        car.carMark=carMark;
        car.year=year;
        car.odometer=odometer
        car.bodyTree=bodyTree
        car.rentalPrice=rentalPrice
        car.currentlyInRent=currentlyRent
      }
    })
    console.log("sssssss => change")
    this.carList.forEach((car: Car) => {
      console.log(car)
    })

  }

  public insertCar(id: string, carMark: string, year: number, odometer: string, transmissionsType: string, bodyTree: string, rentalPrice: number, currentlyRent: string) {
    const inserCar = new Car(id, carMark, year, odometer, transmissionsType, bodyTree, rentalPrice, currentlyRent)
    this.carList.push(inserCar)
    console.log(this.carList)
  }
}

