import { Injectable } from '@angular/core';
import { clientes } from 'src/app/test data/users-test';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  login(email:string, pass:string): { id: string | null; idGestor: string | null; usuario: string; pass: string; mail: string; saldo: number | null; } | null | undefined{
    for (let i = 0; i < clientes.length; i++) {
      if (email === clientes[i].mail && pass === clientes[i].pass) {
        console.log("SUCCESS!");
        return clientes[i];
      }  
    }
    console.log("ERROR.");
    return null;
  }
}
