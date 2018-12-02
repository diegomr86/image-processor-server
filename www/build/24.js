webpackJsonp([24],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPageModule", function() { return ForumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum__ = __webpack_require__(569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForumPageModule = /** @class */ (function () {
    function ForumPageModule() {
    }
    ForumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forum__["a" /* ForumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forum__["a" /* ForumPage */]),
            ],
        })
    ], ForumPageModule);
    return ForumPageModule;
}());

//# sourceMappingURL=forum.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(150);
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
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, database, api, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.database = database;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.Object = Object;
        this.database.query('topic', '').then(function (res) {
            console.log('topics', res);
            _this.topics = res;
        });
        this.filters = {
            cycle: '',
            stratum: '',
        };
        this.searching = false;
    }
    ForumPage.prototype.search = function (ev) {
        var _this = this;
        this.searching = true;
        var val = '';
        if (ev) {
            val = ev.target.value;
        }
        this.database.query('topic', val, this.filters).then(function (docs) {
            _this.topics = docs;
        });
    };
    ForumPage.prototype.add = function () {
        this.navCtrl.push('TopicFormPage');
    };
    ForumPage.prototype.open = function (id) {
        this.navCtrl.push('TopicPage', {
            id: id
        });
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forum',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/forum/forum.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Fórum</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="(!topics || topics.length < 1) && !searching" text-center padding>\n    <ion-spinner></ion-spinner>\n    <p>Carregando guias...</p>\n  </div>\n  <div *ngIf="(topics && topics.length > 0) || searching">\n    <p padding text-center>\n      Ajude esta comunidade:\n      <br>\n      <strong>Crie seu próprio Guia de Cultivo!</strong>\n      <br>\n      Melhore ou corrija os que já estão disponíveis.\n    </p>\n    <!-- <ion-searchbar (ionInput)="search($event)" placeholder="Procurar"></ion-searchbar> -->\n    <ion-list>\n      <ion-item-sliding *ngFor="let topic of topics">\n        <button ion-item (click)="open(topic._id)">\n          <h2>{{topic.title}}</h2>\n 				</button>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/forum/forum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ })

});
//# sourceMappingURL=24.js.map