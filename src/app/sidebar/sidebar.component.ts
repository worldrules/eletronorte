import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/principal',     title: 'Principal',         icon:'nc-bank',       class: '' },

    /*
    { path: '/atribuicao',     title: 'Atribuição Organizacional',         icon:'nc-bank',       class: '' },
    { path: '/dadosPessoais',     title: 'Dados Pessoais',         icon:'nc-bank',       class: '' },
    { path: '/endereço',     title: 'Endereço',         icon:'nc-bank',       class: '' },
    { path: '/deficiencia',     title: 'Deficiência',         icon:'nc-bank',       class: '' },
    { path: '/documentos',     title: 'Documentos',         icon:'nc-bank',       class: '' },
    { path: '/dadosBancarios',     title: 'Dados Bancários',         icon:'nc-bank',       class: '' },
    { path: '/familia',     title: 'Familia/Pessoa de Referência',         icon:'nc-bank',       class: '' },
    { path: '/contrato',     title: 'Elementos do Contrato',         icon:'nc-bank',       class: '' },
    { path: '/aposentadoria',     title: 'Aposentadoria',         icon:'nc-bank',       class: '' },
    { path: '/formacao',     title: 'Formaçao Educacional',         icon:'nc-bank',       class: '' },
    { path: '/dadosInternos',     title: 'Dados Internos da Empresa',         icon:'nc-bank',       class: '' },
    { path: '/mudeAquiParaCriarNovaRota',     title: 'mudeAquiParaCriarNovaRota',         icon:'nc-bank',       class: '' },



    */
    { path: '/user',          title: 'Cadastrar',      icon:'nc-single-02',  class: '' },

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
