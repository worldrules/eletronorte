import { Injectable, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }


  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'admin' && usuario.senha === '1234') {

      this.autenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['principal']);
    } else {
      this.autenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['login']);


    }

  }
}
