import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {UserComponent} from '../../pages/user/user.component';
import {TransporteursComponent} from '../../pages/transporteurs/transporteurs.component';
import {AdministrateurComponent} from '../../pages/administrateur/administrateur.component';
import {MagasinierComponent} from '../../pages/magasinier/magasinier.component';
import {ChefChantierComponent} from '../../pages/chef-chantier/chef-chantier.component';
import {ConducteurComponent} from '../../pages/conducteur/conducteur.component';
import {AdminProfileComponent} from '../../pages/admin-profile/admin-profile.component';
import {TransporteurDetailsComponent} from '../../pages/transporteur-details/transporteur-details.component';
import {MagasinierDetailsComponent} from '../../pages/magasinier-details/magasinier-details.component';
import {ChefChantierDetailsComponent} from '../../pages/chef-chantier-details/chef-chantier-details.component';
import {ConducteurDetailsComponent} from '../../pages/conducteur-details/conducteur-details.component';
import {AjouterAdminComponent} from '../../pages/ajouter-admin/ajouter-admin.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'users',           component: UserComponent },
    { path: 'transporteurs',           component: TransporteursComponent },
    { path: 'admins',           component: AdministrateurComponent },
    { path: 'magasiniers',           component: MagasinierComponent },
  { path: 'chefsChantier',           component: ChefChantierComponent },
  { path: 'conducteurs',           component: ConducteurComponent },
  { path: 'admins/:id',           component: AdminProfileComponent },
  { path: 'transporteurs/:id',           component: TransporteurDetailsComponent },
  { path: 'magasiniers/:id',           component: MagasinierDetailsComponent },
  { path: 'chefsChantier/:id',           component: ChefChantierDetailsComponent },
  { path: 'conducteurs/:id',           component: ConducteurDetailsComponent },
  { path: 'admin/add',           component: AjouterAdminComponent }

];
