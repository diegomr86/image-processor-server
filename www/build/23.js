webpackJsonp([23],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, database, toastCtrl, formBuilder, utils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.form = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.isReadyToSave = this.form.valid;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.database.login(this.form.controls.email.value).then(function (resp) {
            if (resp) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
            }
        }).catch(function (e) {
            console.log('login error', e);
            console.log('login error: ' + JSON.stringify(e));
            if (e.name == 'not_found') {
                _this.doSignup();
            }
            else {
                _this.utils.showToast('Erro: ' + JSON.stringify(e), 'error');
            }
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.doSignup = function () {
        var _this = this;
        this.database.signup(this.form.controls.email.value).then(function (response) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
        }).catch(function (e) {
            console.log('signup error', e);
            _this.utils.showToast('Erro: ' + JSON.stringify(e), 'error');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Entrar</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="login()">\n    <ion-item>\n      <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <div>\n      <button ion-button color="primary" block [disabled]="!isReadyToSave">CONTINUAR</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Database */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=23.js.map