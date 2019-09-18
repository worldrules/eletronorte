import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { PrincipalComponent }       from '../../pages/principal/principal.component';
import { UserComponent }            from '../../pages/user/user.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtribuicaoComponent } from 'app/pages/atribuicao/atribuicao.component';
import { DadosPessoaisComponent } from 'app/pages/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from 'app/pages/endereco/endereco.component';
import { DeficienciaComponent } from 'app/pages/deficiencia/deficiencia.component';
import { DocumentosComponent } from 'app/pages/documentos/documentos.component';
import { DadosBancariosComponent } from 'app/pages/dados-bancarios/dados-bancarios.component';
import { FamiliaComponent } from 'app/pages/familia/familia.component';
import { ContratoComponent } from 'app/pages/contrato/contrato.component';
import { AposentadoriaComponent } from 'app/pages/aposentadoria/aposentadoria.component';
import { FormacaoComponent } from 'app/pages/formacao/formacao.component';
import { DadosInternosComponent } from 'app/pages/dados-internos/dados-internos.component';
import { LoginComponent } from 'app/pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrincipalComponent,
    UserComponent,
    AtribuicaoComponent,
    DadosPessoaisComponent,
    EnderecoComponent,
    DeficienciaComponent,
    DocumentosComponent,
    DadosBancariosComponent,
    FamiliaComponent,
    ContratoComponent,
    AposentadoriaComponent,
    FormacaoComponent,
    DadosInternosComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule {}
