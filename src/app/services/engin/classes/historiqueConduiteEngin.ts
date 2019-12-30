import {IdEnginConducteur} from './idEnginConducteur';
import {Conducteur} from '../../user/conducteurs/conducteur';
import {Engin} from './engin';

export class HistoriqueConduiteEngin {
  public id: IdEnginConducteur;
  public dateDebut: string;
  public dateFin: string;
  public conducteur: Conducteur;
  public engin: Engin;



}
