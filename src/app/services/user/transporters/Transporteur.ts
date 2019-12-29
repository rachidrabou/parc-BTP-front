import {User} from '../classes/user';
import {Role} from '../classes/Role';

export class Transporteur extends User {
  private _permis: string;


  get permis(): string {
    return this._permis;
  }

  set permis(value: string) {
    this._permis = value;
  }
}
