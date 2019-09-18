import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  anexaEsp1 () {
    alert("Anexar Especialização 1")
  }
  anexaEsp2 () {
    alert("Anexar Especialização 2")

  }
}
