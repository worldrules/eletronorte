import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/principal',     title: 'Principal',         icon:'nc-bank',       class: '' },
    { path: '/dadosPessoais',     title: 'Dados Pessoais',         icon:'nc-single-02',       class: '' },
    { path: '/atribuicao',     title: 'Atribuição Organizacional',         icon:'nc-minimal-right',       class: '' },
    { path: '/endereco',     title: 'Endereço',         icon:'nc-minimal-right',       class: '' },
    { path: '/deficiencia',     title: 'Deficiência',         icon:'nc-minimal-right',       class: '' },
    { path: '/documentos',     title: 'Documentos',         icon:'nc-single-copy-04',       class: '' },
    { path: '/dadosBancarios',     title: 'Dados Bancários',         icon:'nc-bank',       class: '' },
    { path: '/familia',     title: 'Familia/Pessoa de Referência',         icon:'nc-minimal-right',       class: '' },
    { path: '/contrato',     title: 'Elementos do Contrato',         icon:'nc-paper',       class: '' },
    { path: '/aposentadoria',     title: 'Aposentadoria',         icon:'nc-minimal-right',       class: '' },
    { path: '/formacao',     title: 'Formaçao Educacional',         icon:'nc-hat-3',       class: '' },
    { path: '/dadosInternos',     title: 'Dados Internos da Empresa',         icon:'nc-briefcase-24',       class: '' },
    { path: '/user',          title: 'Cadastrar',      icon:'nc-badge',  class: '' },
    // { path: '/mudeAquiParaCriarNovaRota',     title: 'mudeAquiParaCriarNovaRota',         icon:'nc-minimal-right',       class: '' },





];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
