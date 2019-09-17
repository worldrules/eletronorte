import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AtribuicaoComponent } from './pages/atribuicao/atribuicao.component';
import { DadosPessoaisComponent } from './pages/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { DeficienciaComponent } from './pages/deficiencia/deficiencia.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { DadosBancariosComponent } from './pages/dados-bancarios/dados-bancarios.component';
import { FamiliaComponent } from './pages/familia/familia.component';
import { ContratoComponent } from './pages/contrato/contrato.component';
import { AposentadoriaComponent } from './pages/aposentadoria/aposentadoria.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { DadosInternosComponent } from './pages/dados-internos/dados-internos.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
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
    DadosInternosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
