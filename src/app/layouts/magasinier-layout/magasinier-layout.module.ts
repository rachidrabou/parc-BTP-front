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
    EnginsComponent
  ]
})

export class MagasinierLayoutModule {}
