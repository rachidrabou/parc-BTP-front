import {User} from '../classes/user';

export class Conducteur extends User {
  private _permis: string;


  get permis(): string {
    return this._permis;
  }

  set permis(value: string) {
    this._permis = value;
  }
}
