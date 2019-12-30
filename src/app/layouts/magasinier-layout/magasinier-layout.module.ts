import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MagasinierLayoutRoutes} from './magasinier-layout.routing';
import {MagasinierLayoutComponent} from './magasinier-layout.component';
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
import {TransporteurDetailsComponent} from '../../pages/transporteur-details/transporteur-details.component';
import {AjouterEnginComponent} from '../../pages/ajouter-engin/ajouter-engin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MagasinierLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    CamionsComponent,
    EnginsComponent,
    AccessoireComponent,
    MaterielComponent,
    MaterielDetailsComponent,
    EnginDetailsComponent,
    CamionDetailsComponent,
    AjouterCamionComponent,
    AjouterAccessoireComponent,
    AccessoireDetailsComponent,
    AjouterEnginComponent
  ]
})

export class MagasinierLayoutModule {}
