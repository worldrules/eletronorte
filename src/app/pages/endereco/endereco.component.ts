import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})

export class EnderecoComponent implements OnInit {
  @Input()  cep: any;
  rua:any;
  numero:any;
  cidade:any;
  bairro:any;
  complemento:any;
  chavePais:any;
  regiao:any;
  comunicacao: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  consultarCEP() {
    this.cep = this.cep.replace(/\D/g, '');
    if (this.cep != '') {
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(this.cep)) {
        this.http.get<any>(`//viacep.com.br/ws/${this.cep}/json`)
        .subscribe(dados => {
          this.cidade = dados.localidade
          this.rua = dados.logradouro
          this.bairro = dados.bairro
        });
      }
    }
  }

}
