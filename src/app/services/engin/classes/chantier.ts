export class Chantier {

  private _chantier_id: number;
  private _nom: string;


  get chantier_id(): number {
    return this._chantier_id;
  }

  set chantier_id(value: number) {
    this._chantier_id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }
}
