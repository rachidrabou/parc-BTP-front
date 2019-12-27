
export class Accessoire {
  private _accessoire_id: string;
  private _nom: string;


  get accessoire_id(): string {
    return this._accessoire_id;
  }

  set accessoire_id(value: string) {
    this._accessoire_id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }
}


