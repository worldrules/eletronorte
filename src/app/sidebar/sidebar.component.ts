import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/principal',     title: 'Principal',         icon:'nc-bank',       class: '' },
    { path: '/atribuicao',     title: 'Atribuição Organizacional',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/dadosPessoais',     title: 'Dados Pessoais',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/endereco',     title: 'Endereço',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/deficiencia',     title: 'Deficiência',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/documentos',     title: 'Documentos',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/dadosBancarios',     title: 'Dados Bancários',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/familia',     title: 'Familia/Pessoa de Referência',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/contrato',     title: 'Elementos do Contrato',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/aposentadoria',     title: 'Aposentadoria',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/formacao',     title: 'Formaçao Educacional',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/dadosInternos',     title: 'Dados Internos da Empresa',         icon:'nc-bullet-list-67',       class: '' },
    { path: '/user',          title: 'Cadastrar',      icon:'nc-badge',  class: '' },
    // { path: '/mudeAquiParaCriarNovaRota',     title: 'mudeAquiParaCriarNovaRota',         icon:'nc-bullet-list-67',       class: '' },





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
