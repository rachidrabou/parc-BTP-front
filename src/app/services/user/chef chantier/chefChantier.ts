import {User} from '../classes/user';

export class ChefChantier extends User{

  private _specialite: string;


  get specialite(): string {
    return this._specialite;
  }

  set specialite(value: string) {
    this._specialite = value;
  }
}
