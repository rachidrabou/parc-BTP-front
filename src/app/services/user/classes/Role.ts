export class Role {
  private _roleId: string;
  private _role: string;


  get roleId(): string {
    return this._roleId;
  }

  set roleId(value: string) {
    this._roleId = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
