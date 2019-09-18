import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private usuario: Usuario = new Usuario();



    constructor(private authService: AuthService) {

    }

    ngOnInit() {

    }

    fazerLogin() {
      console.log(this.usuario.nome);
      console.log(this.usuario.senha);
    }

}
