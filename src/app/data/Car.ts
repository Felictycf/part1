export class Car {
  get registrationNumber(): string {
    return this._registrationNumber;
  }

  set registrationNumber(value: string) {
    this._registrationNumber = value;
  }

  get carMark(): string {
    return this._carMark;
  }

  set carMark(value: string) {
    this._carMark = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get odometer(): string {
    return this._odometer;
 }

  set odometer(value: string) {
    this._odometer = value;
  }

  get transmissionsType(): string {
    return this._transmissionsType;
  }

  set transmissionsType(value: string) {
    this._transmissionsType = value;
  }

  get bodyTree(): string {
    return this._bodyTree;
  }

  set bodyTree(value: string) {
    this._bodyTree = value;
  }

  get rentalPrice(): number {
    return this._rentalPrice;
  }

  set rentalPrice(value: number) {
    this._rentalPrice = value;
  }

  get currentlyInRent(): string {
    return this._currentlyInRent;
  }

  set currentlyInRent(value: string) {
    this._currentlyInRent = value;
  }
  private _registrationNumber:string;
  private _carMark:string;
  private _year:number;
  private _odometer:string;
  private _transmissionsType:string;
  private _bodyTree:string;
  private _rentalPrice:number;
  private _currentlyInRent:string;
  constructor(registrationNumber:string, carMark:string, year:number,odometer:string, transmissionsType:string, bodyTree:string,rentalPrice:number,currentlyInRent:string){
    this._registrationNumber=registrationNumber;
    this._carMark=carMark;
    this._year=year;
    this._odometer=odometer;
    this._transmissionsType=transmissionsType;
    this._bodyTree=bodyTree;
    this._rentalPrice=rentalPrice;
    this._currentlyInRent=currentlyInRent;
  }
}
