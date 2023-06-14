import { Component } from '@angular/core';
import { transferenciaRecibida } from 'src/app/test data/transferencias-dummy';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {
  transferencias: any[] = transferenciaRecibida;
}
