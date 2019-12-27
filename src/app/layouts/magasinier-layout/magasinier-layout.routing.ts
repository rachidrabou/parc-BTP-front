import { Routes } from '@angular/router';

import {CamionsComponent} from '../../pages/camions/camions.component';
import {EnginsComponent} from '../../pages/engins/engins.component';

export const MagasinierLayoutRoutes: Routes = [
  { path: 'camions',      component: CamionsComponent },
  { path: 'engins',      component: EnginsComponent }
];
