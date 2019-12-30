import {Role} from './Role';

export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public phoneNumber: string;
  public email: string;
  public dateOfBirth: Date;
  public roles: Role[];
  public password: string;
  public description: string;
  public ville: string;
  public pays: string;

}
