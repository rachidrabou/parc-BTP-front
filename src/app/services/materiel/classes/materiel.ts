import {Accessoire} from '../../engin/classes/Accessoire';
import {Status} from '../../engin/classes/Status';
import {ObjetChantiers} from './objetChantiers';

export class Materiel {
  private _id: string;
  private _type: string;
  private _designation: string;
  private _poids: number;
  private _marque: string;
  private _modele: string;
  private _status: Status[];
  private _accessoires: Accessoire;
  private _objetChantiers: ObjetChantiers[];


  get status(): Status[] {
    return this._status;
  }


  get objetChantiers(): ObjetChantiers[] {
    return this._objetChantiers;
  }

  set objetChantiers(value: ObjetChantiers[]) {
    this._objetChantiers = value;
  }

  set status(value: Status[]) {
    this._status = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get designation(): string {
    return this._designation;
  }

  set designation(value: string) {
    this._designation = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get marque(): string {
    return this._marque;
  }

  set marque(value: string) {
    this._marque = value;
  }

  get modele(): string {
    return this._modele;
  }

  set modele(value: string) {
    this._modele = value;
  }



  get accessoires(): Accessoire {
    return this._accessoires;
  }

  set accessoires(value: Accessoire) {
    this._accessoires = value;
  }
}
