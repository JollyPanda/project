import { Component } from '@angular/core';
import { transferenciaRecibida } from 'src/app/test data/transferencias-dummy';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent {
  transferencias: any[] = transferenciaRecibida;
}
