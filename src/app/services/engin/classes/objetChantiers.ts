import {Chantier} from './chantier';

export class ObjetChantiers {

  private _dateDebut: string;
  private _dateFin: string;
  private _chantier: Chantier;


  get dateDebut(): string {
    return this._dateDebut;
  }

  set dateDebut(value: string) {
    this._dateDebut = value;
  }

  get dateFin(): string {
    return this._dateFin;
  }

  set dateFin(value: string) {
    this._dateFin = value;
  }

  get chantier(): Chantier {
    return this._chantier;
  }

  set chantier(value: Chantier) {
    this._chantier = value;
  }
}
