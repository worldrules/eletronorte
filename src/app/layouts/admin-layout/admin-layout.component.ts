import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../pages/login/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  mostrarMenu: boolean = false;


  constructor(private authService: AuthService) {

  }

  ngOnInit() {

    //Método para esconder o nav se não estiver logado
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    console.log(this.mostrarMenu);
   }
}
