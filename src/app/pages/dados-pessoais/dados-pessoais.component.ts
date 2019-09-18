import { Component, OnInit } from '@angular/core';

import { ColaboradorService } from 'app/shared/services/colaborador.service';
import { DataService } from './../../shared/services/data.service';
import { Colaborador } from './../../shared/models/colaborador';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  colaborador: Colaborador;
  key: string = '';

  constructor(
    private _colaboradorData: DataService,
    private _colaboradorService : ColaboradorService

    ) { }

  ngOnInit() {
    this.colaborador = new Colaborador();
    this._colaboradorData.colaboradorAtual.subscribe(
      data => {
        if (data.colaborador && data.key) {
          this.colaborador = new Colaborador();
          this.colaborador.nome = data.colaborador.nome;
          this.key = data.key;
        }
      })

  }

  onSubmit() {
    console.log('s');
    if (this.key) {
      this._colaboradorService.update(this.colaborador, this.key);
    } else {
      this._colaboradorService.insert(this.colaborador);

    }

    this.colaborador = new Colaborador();
    this.key = null;


  }

  anexaNome() {
    alert('Anexar arquivo apertado');
  }
}
