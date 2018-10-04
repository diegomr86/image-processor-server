webpackJsonp([21],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.openPage = function (page, params) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(page, params);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h2> Rede Agrofloresta </h2>\n<p>Plataforma de construção colaborativa de conhecimento sobre Agroflorestas.</p>\n<br>\n\n<img src="http://blog.tistu.com.br/wp-content/themes/tistu_blog/thumb.php?src=http://blog.tistu.com.br/wp-content/uploads/2016/03/agrofloresta_logo_6701.png&w=590&h=209&zc=1" width="590" />\n\n<h5> Objetivo </h5>\n\nA idéia é criar-mos uma base de dados de conhecimento coletivo sobre agrofloresta como mais uma ferramenta que nós agricultores poderemos utilizar no trabalho com nossa agrofloresta, além de ajudar na difusão de conhecimento. \n\n<h5> Requisitos principais </h5>\n<ul>\n	<li>Todo o conteúdo criado e mantido pela própria comunidade.</li>\n	<li>Qualquer pessoa pode criar ou alterar qualquer conteúdo (exceto comentários).</li>\n	<li>O Código fonte aberto (open source).</li>\n	<li>As informações devem estar disponíveis mesmo que o usuário não esteja conectado (offline first).</li>\n	<li>Não ter nenhum tipo de publicidade</li>\n	<li>Ser acessível em qualquer plataforma web, android e ios.</li>\n	<li>Servir de base para criação de novas tecnologias relacionadas.</li>\n</ul>\n\n<h5> Como colaborar </h5>\n\nVocê pode ajudar esse projeto das seguintes formas:\n\n<ul>\n	<li>Faça sua propria agrofloresta</li>\n	<li>Ajude a criar e manter o conteúdo da plataforma</li>\n	<li><a href="https://github.com/diegomr86/agrofloresta" target="_blank">Trabalhe no código e no design da plataforma</a></li>\n	<li><a href="https://github.com/diegomr86/agrofloresta/issues/new" target="_blank">Informe algum problema que você encontrar</a></li>\n	<!-- <li><a (click)="openPage(\'SharePage\')">Compartilhe com seus amigos</a></li> -->\n	<li><a (click)="openPage(\'DonatePage\')">Faça uma doação</a></li>\n</ul>\n\n<h5> Funções implementadas </h5>\n\n<ul>\n	<li>Tabela de plantas: Uma lista contendo os cultivares e suas informações de ciclo, estrato, espaçamento, tempo de colheita, etc.</li>\n	<li>Guia básico: Um guia para nivelação de conhecimento dos usuários.</li>\n	<li>Post: Central de postagens onde qualquer pessoa pode postar um artigo, foto, vídeo, evento.</li>\n	<li>Eventos: central de eventos sobre agrofloresta como cursos, palestras, vivencias, etc.</li>\n</ul>\n\n<h5> Funções à implementar </h5>\n\n<ul>\n	<li>Biblioteca: Aqui estará guardado todo o conteúdo postando na plataforma de forma organizada e acessível.</li>\n	<li>TV agroflorestal: Player de vídeo com o conteúdo postado pelos usuários.</li>\n	<li>Mapa de agroflorestas: mapa real do país com os projetos agroflorestais cadastrados pela comunidade usando geolocalização.</li>\n</ul>\n\n<h5> Licença </h5>\n\nEste software está licenciado sobre a licença:\n\n<h5> Creative Commons (CC BY-NC-SA 4.0) (LICENSE) </h5>\n\n<img src="https://br.creativecommons.org/wp-content/uploads/2015/04/by-nc-sa.jpg" />\n\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=21.js.map