import {Accessoire} from '../../engin/classes/Accessoire';
import {Status} from '../../engin/classes/Status';
import {ObjetChantiers} from './objetChantiers';
import {HistoriquePannes} from './historiquePannes';

export class Materiel {
  public id: string;
  public type: string;
  public designation: string;
  public poids: number;
  public marque: string;
  public modele: string;
  public historiquePannes: HistoriquePannes[];
  public accessoires: Accessoire;
  public objetChantiers: ObjetChantiers[];



}
