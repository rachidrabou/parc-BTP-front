export class Camion {
  private _id: string;
  private _marque: string;
  private _carburant: string;
  private _chargePoids: number;


  constructor( marque: string, carburant: string, chargePoids: number) {
    this._marque = marque;
    this._carburant = carburant;
    this._chargePoids = chargePoids;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get marque(): string {
    return this._marque;
  }

  set marque(value: string) {
    this._marque = value;
  }

  get carburant(): string {
    return this._carburant;
  }

  set carburant(value: string) {
    this._carburant = value;
  }

  get chargePoids(): number {
    return this._chargePoids;
  }

  set chargePoids(value: number) {
    this._chargePoids = value;
  }
}
