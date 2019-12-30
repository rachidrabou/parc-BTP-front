
import {Transporteur} from '../../user/transporters/Transporteur';
import {Camion} from './camion';
import {BonTransportId} from './bonTransportId';

export class BonTransport {
  public id: BonTransportId;
  public dateTransport: string;
  public transporteur: Transporteur;
  public camion: Camion;

}
