import { Routes } from '@angular/router';

import {CamionsComponent} from '../../pages/camions/camions.component';
import {EnginsComponent} from '../../pages/engins/engins.component';
import {AccessoireComponent} from '../../pages/accessoire/accessoire.component';
import {MaterielComponent} from '../../pages/materiel/materiel.component';
import {MaterielDetailsComponent} from '../../pages/materiel-details/materiel-details.component';
import {EnginDetailsComponent} from '../../pages/engin-details/engin-details.component';
import {CamionDetailsComponent} from '../../pages/camion-details/camion-details.component';
import {AjouterCamionComponent} from '../../pages/ajouter-camion/ajouter-camion.component';
import {AjouterAccessoireComponent} from '../../pages/ajouter-accessoire/ajouter-accessoire.component';
import {AccessoireDetailsComponent} from '../../pages/accessoire-details/accessoire-details.component';
import {AjouterEnginComponent} from '../../pages/ajouter-engin/ajouter-engin.component';

export const MagasinierLayoutRoutes: Routes = [
  { path: 'camions',      component: CamionsComponent },
  { path: 'engins',      component: EnginsComponent },
  { path: 'accessoires',      component: AccessoireComponent },
  { path: 'materiels',      component: MaterielComponent },
  { path: 'materiels/:id',      component: MaterielDetailsComponent },
  { path: 'engins/:id',      component: EnginDetailsComponent },
  { path: 'camions/:id',      component: CamionDetailsComponent },
  { path: 'camion/add',      component: AjouterCamionComponent },
  { path: 'accessoires/add',      component: AjouterAccessoireComponent },
  { path: 'accessoires/:id',      component: AccessoireDetailsComponent },
  { path: 'engin/add',      component: AjouterEnginComponent }
];
