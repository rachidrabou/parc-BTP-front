export class Camion {
  private _camion_id: string;
  private _marque: string;
  private _carburant: string;
  private _chargePoids: number;


  get camion_id(): string {
    return this._camion_id;
  }

  set camion_id(value: string) {
    this._camion_id = value;
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
