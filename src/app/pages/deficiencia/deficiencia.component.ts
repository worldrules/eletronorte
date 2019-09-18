import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deficiencia',
  templateUrl: './deficiencia.component.html',
  styleUrls: ['./deficiencia.component.scss']
})
export class DeficienciaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  anexaDeficiencia() {
    alert('Anexar Deficiência')
  }
}
