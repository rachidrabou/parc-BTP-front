export class Status {
  private _status_id: string;
  private _etat: string;


  get status_id(): string {
    return this._status_id;
  }

  set status_id(value: string) {
    this._status_id = value;
  }

  get etat(): string {
    return this._etat;
  }

  set etat(value: string) {
    this._etat = value;
  }
}
