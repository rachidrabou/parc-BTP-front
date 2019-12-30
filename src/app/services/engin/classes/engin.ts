import {Accessoire} from './Accessoire';
import {Status} from './Status';
import {ObjetChantiers} from './objetChantiers';
import {HistoriquePannes} from './historiquePannes';

export class Engin {
  public id: string;
  public type: string;
  public designation: string;
  public poids: number;
  public marque: string;
  public modele: string;
  public carburant: string;
  public historiquePannes: HistoriquePannes[];
  public accessoires: Accessoire;
  public objetChantiers: ObjetChantiers[];


}
