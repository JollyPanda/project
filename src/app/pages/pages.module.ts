import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [
    DashboardComponent,
    TransferenciasRecibidasComponent,
    TransferenciasEnviadasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentesModule
  ]
})
export class PagesModule { }
