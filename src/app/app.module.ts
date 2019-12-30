import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MagasinierLayoutComponent } from './layouts/magasinier-layout/magasinier-layout.component';
import { CamionsComponent } from './pages/camions/camions.component';
import { EnginsComponent } from './pages/engins/engins.component';
import { UserComponent } from './pages/user/user.component';
import { AccessoireComponent } from './pages/accessoire/accessoire.component';
import { MaterielComponent } from './pages/materiel/materiel.component';
import { TransporteursComponent } from './pages/transporteurs/transporteurs.component';
import { MaterielDetailsComponent } from './pages/materiel-details/materiel-details.component';
import { EnginDetailsComponent } from './pages/engin-details/engin-details.component';
import { CamionDetailsComponent } from './pages/camion-details/camion-details.component';
import { AdministrateurComponent } from './pages/administrateur/administrateur.component';
import { MagasinierComponent } from './pages/magasinier/magasinier.component';
import { ChefChantierComponent } from './pages/chef-chantier/chef-chantier.component';
import { ConducteurComponent } from './pages/conducteur/conducteur.component';
import { AjouterCamionComponent } from './pages/ajouter-camion/ajouter-camion.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AjouterAccessoireComponent } from './pages/ajouter-accessoire/ajouter-accessoire.component';
import { AccessoireDetailsComponent } from './pages/accessoire-details/accessoire-details.component';
import { TransporteurDetailsComponent } from './pages/transporteur-details/transporteur-details.component';
import { MagasinierDetailsComponent } from './pages/magasinier-details/magasinier-details.component';
import { ChefChantierDetailsComponent } from './pages/chef-chantier-details/chef-chantier-details.component';
import { ConducteurDetailsComponent } from './pages/conducteur-details/conducteur-details.component';
import { AjouterEnginComponent } from './pages/ajouter-engin/ajouter-engin.component';
import { AjouterAdminComponent } from './pages/ajouter-admin/ajouter-admin.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MagasinierLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
