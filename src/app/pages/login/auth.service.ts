import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado: boolean = false;

  constructor(private router: Router) { }


  fazerLogin(usuario: Usuario) {

    if(usuario.nome === 'admin' && usuario.senha === '1234') {

      this.autenticado = true;

      this.router.navigate(['principal']);
    } else {
      this.autenticado = false;

    }

  }
}
