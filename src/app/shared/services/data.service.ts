import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Colaborador } from './../models/colaborador';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private colaboradorSource = new BehaviorSubject({ colaborador: null, key: '' });
  colaboradorAtual = this.colaboradorSource.asObservable();

  obterColaborador( colaborador: Colaborador, key: string ) {
    this.colaboradorSource.next({ colaborador: colaborador, key: key })
  }
}
