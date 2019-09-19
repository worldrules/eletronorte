import { Routes } from '@angular/router';

import { PrincipalComponent } from '../../pages/principal/principal.component';
import { UserComponent } from '../../pages/user/user.component';
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


export const AdminLayoutRoutes: Routes = [
    { path: 'principal',      component: PrincipalComponent },
    { path: 'dadosPessoais',           component: DadosPessoaisComponent },
    { path: 'atribuicao',           component: AtribuicaoComponent },
    { path: 'endereco',           component: EnderecoComponent },
    { path: 'deficiencia',           component: DeficienciaComponent },
    { path: 'documentos',           component: DocumentosComponent },
    { path: 'dadosBancarios',           component: DadosBancariosComponent },
    { path: 'familia',           component: FamiliaComponent },
    { path: 'contrato',           component: ContratoComponent },
    { path: 'aposentadoria',           component: AposentadoriaComponent },
    { path: 'formacao',           component: FormacaoComponent },
    { path: 'dadosInternos',           component: DadosInternosComponent },
    { path: 'user',           component: UserComponent },
    { path: 'login',           component: LoginComponent },

];
