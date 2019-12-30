import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MagasinierLayoutComponent} from '../magasinier-layout/magasinier-layout.component';
import {UserComponent} from '../../pages/user/user.component';
import {TransporteursComponent} from '../../pages/transporteurs/transporteurs.component';
import {AdministrateurComponent} from '../../pages/administrateur/administrateur.component';
import {MagasinierComponent} from '../../pages/magasinier/magasinier.component';
import {ChefChantierComponent} from '../../pages/chef-chantier/chef-chantier.component';
import {ConducteurComponent} from '../../pages/conducteur/conducteur.component';
import {AdminProfileComponent} from '../../pages/admin-profile/admin-profile.component';
import {AccessoireDetailsComponent} from '../../pages/accessoire-details/accessoire-details.component';
import {TransporteurDetailsComponent} from '../../pages/transporteur-details/transporteur-details.component';
import {MagasinierDetailsComponent} from '../../pages/magasinier-details/magasinier-details.component';
import {ChefChantierDetailsComponent} from '../../pages/chef-chantier-details/chef-chantier-details.component';
import {ConducteurDetailsComponent} from '../../pages/conducteur-details/conducteur-details.component';
import {AjouterAdminComponent} from '../../pages/ajouter-admin/ajouter-admin.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UserComponent,
    TransporteursComponent,
    AdministrateurComponent,
    MagasinierComponent,
    ChefChantierComponent,
    ConducteurComponent,
    AdminProfileComponent,
    TransporteurDetailsComponent,
    MagasinierDetailsComponent,
    ChefChantierDetailsComponent,
    ConducteurDetailsComponent,
    AjouterAdminComponent
  ]
})

export class AdminLayoutModule {}
