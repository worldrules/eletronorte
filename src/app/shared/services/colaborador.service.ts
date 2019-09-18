import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Colaborador } from './../models/colaborador';
import { keyframes } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(colaborador: Colaborador) {
    this._angularFireDatabase.list('colaboradores').push(colaborador).then(
      (result: any) => {
        console.log(result.key);
      }
    )
  }
  update(colaborador: Colaborador, key: string) {
    this._angularFireDatabase.list('colaboradores').update(key, colaborador);
  }
  getAll() {

  }
  delete(key: string) {
    this._angularFireDatabase.object(`colaboradores/${key}`).remove();

  }
}
