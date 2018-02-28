webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_availability_availability_component__ = __webpack_require__("../../../../../src/app/pages/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/pages/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_request_request_component__ = __webpack_require__("../../../../../src/app/pages/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_finalized_finalized_component__ = __webpack_require__("../../../../../src/app/pages/finalized/finalized.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_no_results_no_results_component__ = __webpack_require__("../../../../../src/app/pages/no-results/no-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_receipt_receipt_component__ = __webpack_require__("../../../../../src/app/pages/receipt/receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_confirmed_link_confirmed_link_component__ = __webpack_require__("../../../../../src/app/pages/confirmed-link/confirmed-link.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_request_request_component__["a" /* RequestComponent */]
    },
    {
        path: 'disponibilidade',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_availability_availability_component__["a" /* AvailabilityComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'informacao',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_confirmation_confirmation_component__["a" /* ConfirmationComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'confirmacao/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_confirmed_link_confirmed_link_component__["a" /* ConfirmedLinkComponent */]
    },
    {
        path: 'obrigado',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_finalized_finalized_component__["a" /* FinalizedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'sem-resultados',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_no_results_no_results_component__["a" /* NoResultsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'consulta/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_receipt_receipt_component__["a" /* ReceiptComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_request_request_component__["a" /* RequestComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  position: relative;\n  min-height: calc(100vh - 220px); }\n  @media (min-width: 768px) {\n    .main-container {\n      min-height: calc(100vh - 180px); } }\n  .main-container .images-container .man-image {\n    height: 55vh;\n    width: 30vw;\n    position: absolute;\n    z-index: 1;\n    visibility: hidden;\n    bottom: 0; }\n  .main-container .images-container .woman-image {\n    height: 55vh;\n    position: absolute;\n    z-index: 1;\n    visibility: hidden;\n    bottom: 0; }\n  @media (min-width: 768px) {\n    .main-container .images-container .man-image {\n      visibility: visible;\n      left: 1%; }\n    .main-container .images-container .woman-image {\n      visibility: visible;\n      right: 1%; } }\n  @media (min-width: 992px) {\n    .main-container .images-container .man-image {\n      visibility: visible;\n      left: 2%; }\n    .main-container .images-container .woman-image {\n      visibility: visible;\n      right: 2%; } }\n  @media (min-width: 1200px) {\n    .main-container .images-container .man-image {\n      visibility: visible;\n      left: 7%; }\n    .main-container .images-container .woman-image {\n      visibility: visible;\n      right: 15%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            __WEBPACK_IMPORTED_MODULE_2_ng2_logger__["Log"].setProductionMode();
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n    <div class=\"main-container\">\n      <div class=\"images-container\">\n        <img class=\"man-image\" src=\"assets/images/jogador.png\">\n        <img class=\"woman-image\" src=\"assets/images/woman.png\">\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>",
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_request_request_component__ = __webpack_require__("../../../../../src/app/pages/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_availability_availability_component__ = __webpack_require__("../../../../../src/app/pages/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/pages/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_json_service__ = __webpack_require__("../../../../../src/app/services/json.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_geocoder_service__ = __webpack_require__("../../../../../src/app/services/geocoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_location_select_location_select_component__ = __webpack_require__("../../../../../src/app/components/location-select/location-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_time_pipe__ = __webpack_require__("../../../../../src/app/pipes/time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_location_modal_location_modal_component__ = __webpack_require__("../../../../../src/app/components/location-modal/location-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("../../../../../src/app/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_tracking_service__ = __webpack_require__("../../../../../src/app/services/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_finalized_finalized_component__ = __webpack_require__("../../../../../src/app/pages/finalized/finalized.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_no_results_no_results_component__ = __webpack_require__("../../../../../src/app/pages/no-results/no-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_receipt_receipt_component__ = __webpack_require__("../../../../../src/app/pages/receipt/receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_azure_service__ = __webpack_require__("../../../../../src/app/services/azure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_mix_panel_service__ = __webpack_require__("../../../../../src/app/services/mix-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_confirmed_link_confirmed_link_component__ = __webpack_require__("../../../../../src/app/pages/confirmed-link/confirmed-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_consultation_detail_card_consultation_detail_card_component__ = __webpack_require__("../../../../../src/app/components/consultation-detail-card/consultation-detail-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_request_request_component__["a" /* RequestComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_availability_availability_component__["a" /* AvailabilityComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_confirmation_confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_location_select_location_select_component__["a" /* LocationSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_time_pipe__["a" /* TimePipe */],
                __WEBPACK_IMPORTED_MODULE_20__components_location_modal_location_modal_component__["a" /* LocationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_finalized_finalized_component__["a" /* FinalizedComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_no_results_no_results_component__["a" /* NoResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_receipt_receipt_component__["a" /* ReceiptComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_confirmed_link_confirmed_link_component__["a" /* ConfirmedLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_consultation_detail_card_consultation_detail_card_component__["a" /* ConsultationDetailCardComponent */]
            ],
            imports: [
                // Add .withServerTransition() to support Universal rendering.
                // The application ID can be any identifier which is unique on
                // the page.
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'drja' }),
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_json_service__["a" /* JsonService */], __WEBPACK_IMPORTED_MODULE_14__services_geocoder_service__["a" /* GeocoderService */], __WEBPACK_IMPORTED_MODULE_15__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_18__services_schedule_service__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_22__services_tracking_service__["a" /* TrackingService */], __WEBPACK_IMPORTED_MODULE_26__services_azure_service__["a" /* AzureService */], __WEBPACK_IMPORTED_MODULE_27__services_mix_panel_service__["a" /* MixPanelService */], __WEBPACK_IMPORTED_MODULE_29__services_auth_guard_service__["a" /* AuthGuardService */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__components_location_modal_location_modal_component__["a" /* LocationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_consultation_detail_card_consultation_detail_card_component__["a" /* ConsultationDetailCardComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/confirmation-modal/confirmation-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\"> Consulta </h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>\n    Deseja confirmar o agendamento da sua consulta?\n  </p>\n\n  <app-consultation-detail-card [user]=\"user\">\n  </app-consultation-detail-card>\n\n  <p style=\"font-size: 13px; color: red; margin-top: 15px\">\n    * Sua consulta vai ser solicitada de acordo com as informações acima. Clique aqui para confirmar o dia e horário e prosseguir com o agendamento\n  </p>\n\n\n  <div class=\"btn-submit-wrapper\">\n    <button [disabled]=\"isConfirming\" type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-submit\">\n      <span *ngIf=\"!isConfirming; else loading\">Confirmar</span>\n      <ng-template #loading>\n        <img src=\"assets/icons/spinner.svg\" alt=\"\">\n      </ng-template>\n\n    </button>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/confirmation-modal/confirmation-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-submit-wrapper {\n  position: relative;\n  min-height: 35px;\n  margin-top: 20px; }\n  .btn-submit-wrapper img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n.no-password {\n  text-decoration: underline !important;\n  font-size: 12px;\n  color: #0365c1 !important; }\n  .no-password:hover {\n    cursor: pointer; }\n\n.passwrd-msg {\n  font-size: 16px;\n  color: #0365c1 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/confirmation-modal/confirmation-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_azure_service__ = __webpack_require__("../../../../../src/app/services/azure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_mix_panel_service__ = __webpack_require__("../../../../../src/app/services/mix-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmationModalComponent = (function () {
    function ConfirmationModalComponent(activeModal, router, mixPanelService, scheduleService, azureService) {
        this.activeModal = activeModal;
        this.router = router;
        this.mixPanelService = mixPanelService;
        this.scheduleService = scheduleService;
        this.azureService = azureService;
        this.isConfirming = false;
        this.error = false;
    }
    ConfirmationModalComponent.prototype.ngOnInit = function () {
        this.user = this.scheduleService.user;
    };
    ConfirmationModalComponent.prototype.onClose = function () {
        if (!this.isConfirming) {
            this.activeModal.dismiss('Cross click');
        }
    };
    ConfirmationModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isConfirming = true;
        this.azureService.setConfirmationLink({
            databaseID: this.user.databaseID,
            phone: this.user.phone
        })
            .subscribe(function () {
            _this.mixPanelService.onConfirmModalAppointment();
            _this.isConfirming = false;
            _this.onClose();
            _this.router.navigate(['obrigado']);
        }, function (err) {
            _this.isConfirming = false;
            _this.error = true;
        });
    };
    ConfirmationModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation-modal',
            template: __webpack_require__("../../../../../src/app/components/confirmation-modal/confirmation-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/confirmation-modal/confirmation-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_mix_panel_service__["a" /* MixPanelService */],
            __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_4__services_azure_service__["a" /* AzureService */]])
    ], ConfirmationModalComponent);
    return ConfirmationModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/consultation-detail-card/consultation-detail-card.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"card card-result col-12 \">\n  <h6 class=\"result-title\">Local, especialidade, data e valor selecionado</h6>\n\n  <div class=\"location-wrapper\">\n    <div><i class=\"material-icons\">local_hospital</i> {{user.speciality.name}}</div>\n    <div><i class=\"material-icons\">event</i>\n      <p class=\"date\">{{setDate()}} <span style=\"font-size: 14px\">({{formatWeekDay()}})</span></p>\n    </div>\n    <div><i class=\"material-icons\">location_on</i>\n      <p>{{user.schedule.address.address}}, {{user.schedule.address.number}} - {{user.schedule.address.adjunct}} -\n        {{user.schedule.address.neighborhood.nome}}</p>\n    </div>\n    <div><span class=\"price-sign\">R$</span>\n      <p class=\"price\">{{user.schedule.price_decimal}},00 </p>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/consultation-detail-card/consultation-detail-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-result {\n  border: 2px inset #dbdbdb;\n  box-shadow: none; }\n  .card-result .result-title {\n    color: #0365c1;\n    margin: 10px 0 20px 0; }\n  .card-result .location-wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .card-result .location-wrapper div {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      margin-bottom: 15px;\n      color: #aaa; }\n      .card-result .location-wrapper div .price-sign {\n        font-weight: 800;\n        margin-right: 10px;\n        font-size: 18px;\n        color: #0365c1; }\n      .card-result .location-wrapper div i {\n        font-size: 22px;\n        margin-right: 10px;\n        color: #0365c1; }\n      .card-result .location-wrapper div p {\n        margin: 0; }\n    .card-result .location-wrapper p {\n      margin-bottom: 5px;\n      color: #aaa;\n      font-size: 16px; }\n    .card-result .location-wrapper .image-wrapper {\n      border-radius: 50%;\n      border: 2px solid #dbdbdb;\n      margin: 10px 0; }\n    .card-result .location-wrapper .price {\n      color: #aaa;\n      font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/consultation-detail-card/consultation-detail-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationDetailCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("../../../../../src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultationDetailCardComponent = (function () {
    function ConsultationDetailCardComponent() {
    }
    ConsultationDetailCardComponent.prototype.ngOnInit = function () {
    };
    ConsultationDetailCardComponent.prototype.setDate = function () {
        var date = __WEBPACK_IMPORTED_MODULE_2_moment__["unix"](this.user.schedule.availability.timestamp);
        return date.format('DD') + " de " + date.format('MMMM') + " \u00E0s " + this.user.schedule.availability.time + " ";
    };
    ConsultationDetailCardComponent.prototype.formatWeekDay = function () {
        var date = __WEBPACK_IMPORTED_MODULE_2_moment__["unix"](this.user.schedule.availability.timestamp);
        return __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* Utils */].formatWeekDay(date.format('dddd'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConsultationDetailCardComponent.prototype, "user", void 0);
    ConsultationDetailCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-consultation-detail-card',
            template: __webpack_require__("../../../../../src/app/components/consultation-detail-card/consultation-detail-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/consultation-detail-card/consultation-detail-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultationDetailCardComponent);
    return ConsultationDetailCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  margin: 20px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: center; }\n  footer .reclame-aqui {\n    color: white;\n    font-size: 12px;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: -10px; }\n    footer .reclame-aqui-text {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media (max-width: 767px) {\n    footer {\n      margin-top: 20px;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      text-align: center; } }\n  footer .footer-copyright {\n    color: white;\n    margin-left: 10px;\n    font-size: 12px; }\n    @media (max-width: 767px) {\n      footer .footer-copyright {\n        margin: 10px 0 0 0; } }\n  footer .fa {\n    color: #fff;\n    font-size: 24px;\n    margin: 10px 10px 20px 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: "\n    <footer class=\"row\">\n      <div class=\"reclame-aqui\">\n        <img height=\"65\" src=\"assets/images/ervilha.png\">\n        <div class=\"reclame-aqui-text\">\n          Doutor J\u00E1 faz parte da holding \u00D3bvio Brasil,\n          <br>\n          <span>controladora do <b style=\"font-size: 14px\">Reclame AQUI</b></span>\n        </div>\n      </div>\n      <div class=\"col-12\">\n        <a href=\"https://www.facebook.com/doutorja\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n        <a href=\"https://www.instagram.com/doutorja/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n        <a href=\"https://www.linkedin.com/company/5221146/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n      </div>\n      <img class=\"footer-brand \" height=\"20\" src=\"assets/images/logo-i@2x.png\">\n      <div class=\"footer-copyright\">Copyright \u00A9 2014-2018 Doutor J\u00E1 marca\u00E7\u00E3o de consultas ltda\n      </div>\n    </footer>",
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #0365c1;\n  box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.15); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: "<nav class=\"navbar\">\n    <div class=\"container\">\n    <a class=\"navbar-brand\">\n      <img src=\"assets/images/logo-i@2x.png\"  height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    </a>\n    </div>\n  </nav>",
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div v-if=\"isLoading\" class=\"loader-container\">\n\n  <div class=\"loader-img\">\n    <img src=\"assets/icons/doutorja-128.png\" height=\"30\" alt=\"\">\n  </div>\n  <div class=\"spinner\">\n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n  </div>\n  <p > {{msg || 'Carregando...'}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 100%; }\n  .loader-container p {\n    margin-top: 10px;\n    color: #f0c400; }\n  .loader-container .loader-img {\n    position: relative;\n    z-index: 10;\n    padding-top: 5px; }\n  .loader-container .spinner {\n    width: 45px;\n    height: 45px;\n    position: relative;\n    margin-top: -38px; }\n  .loader-container .double-bounce1, .loader-container .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #ffd001;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: sk-bounce 2.0s infinite ease-in-out; }\n  .loader-container .double-bounce2 {\n    animation-delay: -1.0s; }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "msg", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/location-modal/location-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">\n    Selecione a melhor opção para sua consulta\n  </h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"date-chosen\">\n    {{setDate()}} :\n  </div>\n  <div *ngFor=\"let d of doctors, let i = index\" class=\"form-check mb-3\">\n    <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"radio\" (click)=\"onSelected(d)\" >\n      <span class=\"price\"> {{d.price}}</span> -\n      <span class=\"address\">{{d.address.address}}, {{d.address.number}} - {{d.address.adjunct}} - {{d.address.neighborhood.nome}} </span>\n      <span *ngIf=\"i === 0\" class=\"badge badge-success\">Menor Preço!</span>\n    </label>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/location-modal/location-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-title {\n  color: #024b8f;\n  font-weight: 700; }\n\nlabel:hover {\n  cursor: pointer; }\n\n.price {\n  color: #0365c1;\n  font-weight: 700;\n  font-size: 16px; }\n\n.address {\n  color: #aaa;\n  font-size: 14px; }\n\n.date-chosen {\n  margin-bottom: 8px; }\n\n.badge {\n  margin-left: 10px;\n  font-size: 85%;\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location-modal/location-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tracking_service__ = __webpack_require__("../../../../../src/app/services/tracking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationModalComponent = (function () {
    function LocationModalComponent(activeModal, router, scheduleService, trackingService) {
        this.activeModal = activeModal;
        this.router = router;
        this.scheduleService = scheduleService;
        this.trackingService = trackingService;
    }
    LocationModalComponent.prototype.ngOnInit = function () {
    };
    LocationModalComponent.prototype.setDate = function () {
        var date = __WEBPACK_IMPORTED_MODULE_2_moment__(this.doctors[0].date + " " + this.doctors[0].availability.time, 'YYYY-MM-DD HH:mm');
        return date.format('DD') + " de " + date.format('MMMM') + " \u00E0s " + this.doctors[0].availability.time + "h";
    };
    LocationModalComponent.prototype.onSelected = function (d) {
        this.scheduleService.user.schedule = d;
        this.activeModal.close();
        this.trackingService.onAvailabilitySelected(this.scheduleService.user);
        this.router.navigate(['informacao']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LocationModalComponent.prototype, "doctors", void 0);
    LocationModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-location-modal',
            template: __webpack_require__("../../../../../src/app/components/location-modal/location-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/location-modal/location-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_5__services_tracking_service__["a" /* TrackingService */]])
    ], LocationModalComponent);
    return LocationModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/location-select/location-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cities\" class=\"form-group\">\n  <label [ngClass]=\"{ 'error-label': checkValidation(location.city, 'Selecione a Cidade')  }\"\n         for=\"city\">Agora me diga, qual a sua cidade?\n    <span class=\"mandatory\"> * </span>\n  </label>\n  <select [(ngModel)]=\"location.city\" name=\"city\" (ngModelChange)=\"onChangeCity($event)\"\n          class=\"form-control\" id=\"city\"\n          [ngClass]=\"{ 'error': checkValidation(location.city, 'Selecione a Cidade')  }\">\n    <option disabled selected>Selecione a Cidade</option>\n    <option [value]=\"c.name\" *ngFor=\"let c of cities\">{{c.name}}</option>\n  </select>\n</div>\n\n<div *ngIf=\"neighborhoods\" class=\"form-group\">\n  <label [ngClass]=\"{ 'error-label': checkValidation(location.neighborhood, 'Selecione o Bairro') }\"\n         for=\"neighborhood\">Qual o bairro de preferência?\n    <span class=\"mandatory\"> * </span>\n  </label>\n  <select [(ngModel)]=\"location.neighborhood\" name=\"neighborhood\" (ngModelChange)=\"onChangeNeighborhood()\"\n          id=\"neighborhood\" class=\"form-control\"\n          [ngClass]=\"{ 'error': checkValidation(location.neighborhood, 'Selecione o Bairro') }\">\n    <option disabled selected>Selecione o Bairro</option>\n    <option *ngFor=\"let n of neighborhoods\">{{n.name}}</option>\n  </select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/location-select/location-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n  color: white;\n  font-size: 12px; }\n  @media (min-width: 768px) {\n    label {\n      font-size: 14px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location-select/location-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_json_service__ = __webpack_require__("../../../../../src/app/services/json.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_geocoder_service__ = __webpack_require__("../../../../../src/app/services/geocoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("../../../../../src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_queryParams__ = __webpack_require__("../../../../../src/app/models/queryParams.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LocationSelectComponent = (function () {
    function LocationSelectComponent(jsonService, geocoderService, scheduleService, activatedRoute) {
        this.jsonService = jsonService;
        this.geocoderService = geocoderService;
        this.scheduleService = scheduleService;
        this.activatedRoute = activatedRoute;
        this.json = {
            localities: []
        };
        this.log = __WEBPACK_IMPORTED_MODULE_10_ng2_logger__["Log"].create('LocationSelectComponent');
        this.location = {
            city: 'Selecione a Cidade',
            neighborhood: 'Selecione o Bairro',
            state: null
        };
        this.coordinates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locality = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LocationSelectComponent.prototype.ngOnInit = function () {
        this.init();
        this.setSelectFromJSON();
    };
    LocationSelectComponent.prototype.setSelectFromJSON = function () {
        var _this = this;
        this.jsonService.getLocalities()
            .map(function (s) {
            _this.json.localities = s;
            _this.setCities(s);
        })
            .mergeMap(function () { return _this.activatedRoute.queryParams; })
            .subscribe(function (val) {
            Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["isEmpty"])(val) ? _this.checkLocalStorage() : _this.checkQueryParams(val);
            if (_this.location.city.localeCompare('Selecione a Cidade') !== 0 &&
                _this.location.neighborhood.localeCompare('Selecione o Bairro') !== 0)
                _this.onChangeNeighborhood();
        });
    };
    LocationSelectComponent.prototype.checkLocalStorage = function () {
        var lStorage = localStorage.getItem('user');
        if (lStorage) {
            var l = JSON.parse(lStorage);
            l.locality.state = this.getState(l.locality.city);
            l.locality.city = this.getCity(l.locality.city);
            this.checkQueryParams(new __WEBPACK_IMPORTED_MODULE_6__models_queryParams__["a" /* QueryParams */](null, l.locality.state, l.locality.city, l.locality.neighborhood));
        }
    };
    LocationSelectComponent.prototype.checkQueryParams = function (val) {
        var _this = this;
        if (val && val.estado) {
            var state = this.json.localities
                .find(function (s) {
                return __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].simplifyString(s.id).localeCompare(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].simplifyString(val.estado)) === 0;
            });
            if (state) {
                this.setCities(this.json.localities);
                if (val.cidade) {
                    var city = this.cities.find(function (s) {
                        return __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].simplifyString(_this.getCity(s.name)).localeCompare(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].simplifyString(val.cidade)) === 0;
                    });
                    if (city) {
                        this.neighborhoods = city.neighborhoods;
                        this.location.city = city.name;
                        if (val.bairro) {
                            var neighborhood = city.neighborhoods.find(function (s) {
                                return __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].simplifyString(s.name).localeCompare(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].simplifyString(val.bairro)) === 0;
                            });
                            if (neighborhood)
                                this.location.neighborhood = neighborhood.name;
                        }
                    }
                }
            }
        }
    };
    LocationSelectComponent.prototype.init = function () {
        this.cities = this.neighborhoods = null;
        this.coordinates.emit(null);
        this.location.city = 'Selecione a Cidade';
        this.location.neighborhood = 'Selecione o Bairro';
    };
    LocationSelectComponent.prototype.checkValidation = function (str1, str2) {
        return __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */].checkValidation(this.validation, str1, str2);
    };
    LocationSelectComponent.prototype.onChangeCity = function (value) {
        this.location.neighborhood = 'Selecione o Bairro';
        this.coordinates.emit(null);
        this.neighborhoods = this.cities.find(function (c) { return c.name.localeCompare(value) === 0; }).neighborhoods;
    };
    LocationSelectComponent.prototype.onChangeNeighborhood = function () {
        var _this = this;
        var address = this.location.neighborhood + ", " + this.location.city;
        this.coordinates.emit(null);
        this.location.state = this.getState(this.location.city);
        this.locality.emit(this.location);
        var observer = !this.geocoderService.isGoogle ? this.geocoderService.isGoogleUp() : __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of('');
        observer
            .mergeMap(function () { return _this.mapCoordinates(address); })
            .subscribe(function (resp) {
            _this.log.info('Address', address);
            _this.log.info('Coord', resp);
            _this.coordinates.emit(resp);
        });
    };
    LocationSelectComponent.prototype.getState = function (str) {
        return str.substring(str.length - 2);
    };
    LocationSelectComponent.prototype.getCity = function (str) {
        return str.substring(0, str.indexOf(','));
    };
    LocationSelectComponent.prototype.mapCoordinates = function (address) {
        return this.geocoderService.codeAddress(address)
            .map(function (resp) {
            return {
                lat: resp[0].geometry.location.lat(),
                lng: resp[0].geometry.location.lng(),
            };
        });
    };
    LocationSelectComponent.prototype.setCities = function (arr) {
        this.cities = arr.reduce(function (acc, r) {
            return acc.concat(r.cities.map(function (c) {
                return { name: c.name + ", " + r.id, neighborhoods: c.neighborhoods };
            }));
        }, [])
            .sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LocationSelectComponent.prototype, "coordinates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LocationSelectComponent.prototype, "locality", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LocationSelectComponent.prototype, "validation", void 0);
    LocationSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-location-select',
            template: __webpack_require__("../../../../../src/app/components/location-select/location-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/location-select/location-select.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_json_service__["a" /* JsonService */],
            __WEBPACK_IMPORTED_MODULE_2__services_geocoder_service__["a" /* GeocoderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], LocationSelectComponent);
    return LocationSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/consultation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consultation; });
var Consultation = (function () {
    function Consultation(name, timeStamp, avatar, birthdate, state, city, neighborhood, date, lat, lng, phone, price, speciality, time, workPlace, workPlaceAddress, workPlaceOrderOfArrival) {
        this.name = name;
        this.timeStamp = timeStamp;
        this.avatar = avatar;
        this.birthdate = birthdate;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.date = date;
        this.lat = lat;
        this.lng = lng;
        this.phone = phone;
        this.price = price;
        this.speciality = speciality;
        this.time = time;
        this.workPlace = workPlace;
        this.workPlaceAddress = workPlaceAddress;
        this.workPlaceOrderOfArrival = workPlaceOrderOfArrival;
    }
    return Consultation;
}());



/***/ }),

/***/ "../../../../../src/app/models/doctorFields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorFields; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var DoctorFields = (function () {
    function DoctorFields(speciality_id, latitude, longitude, start_date, name, page_number, per_page, price_range_id, total_days, distance) {
        if (start_date === void 0) { start_date = __WEBPACK_IMPORTED_MODULE_0_moment__().format('YYYY-MM-DD'); }
        if (page_number === void 0) { page_number = 1; }
        if (per_page === void 0) { per_page = 15; }
        if (price_range_id === void 0) { price_range_id = 3; }
        if (total_days === void 0) { total_days = 3; }
        if (distance === void 0) { distance = 8; }
        this.speciality_id = speciality_id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.start_date = start_date;
        this.name = name;
        this.page_number = page_number;
        this.per_page = per_page;
        this.price_range_id = price_range_id;
        this.total_days = total_days;
        this.distance = distance;
    }
    return DoctorFields;
}());



/***/ }),

/***/ "../../../../../src/app/models/queryParams.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryParams; });
var QueryParams = (function () {
    function QueryParams(especialidade, estado, cidade, bairro) {
        this.especialidade = especialidade;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
    }
    return QueryParams;
}());



/***/ }),

/***/ "../../../../../src/app/models/search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
var Search = (function () {
    function Search(date, price, price_decimal, name, address, availability, avatar, autoConfirmation, service_location_profile) {
        this.date = date;
        this.price = price;
        this.price_decimal = price_decimal;
        this.name = name;
        this.address = address;
        this.availability = availability;
        this.avatar = avatar;
        this.autoConfirmation = autoConfirmation;
        this.service_location_profile = service_location_profile;
    }
    return Search;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, phone, speciality, coordinates, schedule, birthdate, who_will_consult, locality, databaseID, expiration, isEmptyResult, email, lastName) {
        if (speciality === void 0) { speciality = { name: 'Selecione a Especialidade', id: 0 }; }
        if (who_will_consult === void 0) { who_will_consult = 'me'; }
        if (isEmptyResult === void 0) { isEmptyResult = false; }
        this.name = name;
        this.phone = phone;
        this.speciality = speciality;
        this.coordinates = coordinates;
        this.schedule = schedule;
        this.birthdate = birthdate;
        this.who_will_consult = who_will_consult;
        this.locality = locality;
        this.databaseID = databaseID;
        this.expiration = expiration;
        this.isEmptyResult = isEmptyResult;
        this.email = email;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pages/availability/availability.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"request-container justify-content-center row pt-4\">\n  <div class=\"card col-10  col-sm-10 col-md-10 col-lg-8 col-xl-7 \">\n    <header class=\"title-wrapper\">\n      <a routerLink=\"\" class=\"back-arrow\"> <i class=\"material-icons\">keyboard_arrow_left</i></a>\n      <h4 class=\"title\">Selecione um horário</h4>\n      <p class=\"subtitle\">(Os endereços e preços podem variar de acordo com a opção)</p>\n    </header>\n\n    <article class=\"row no-gutters calendar-container\">\n\n      <div class=\"col-1 ml-2 ml-md-0 col-md-3 arrow-back-wrapper\">\n        <a (click)=\"onNextorPrevDates(-3)\" [ngClass]=\"{'disabled': isPrevPossible()}\">\n          <i class=\"material-icons\">keyboard_arrow_left</i>\n        </a>\n      </div>\n\n      <div *ngFor=\"let d of dates\" class=\"col-3 col-md-2\">\n        <h6 class=\"date\">{{d.format('DD MMM')}}</h6>\n        <p class=\"weekday\">{{formatWeekDay(d.format('dddd'))}}</p>\n      </div>\n\n\n      <div class=\"col-1 col-md-3 arrow-forward-wrapper\">\n        <a (click)=\"onNextorPrevDates(3)\"> <i class=\"material-icons\">keyboard_arrow_right</i> </a>\n\n      </div>\n\n    </article>\n\n    <article class=\"row schedule-container no-gutters\">\n\n      <div class=\"loader-wrapper\" *ngIf=\"!doctors; else results\">\n        <app-loader [msg]=\"'Buscando Médicos...'\"></app-loader>\n      </div>\n\n      <ng-template #results>\n\n        <div *ngIf=\"availableOnDate; else available\" style=\"margin: auto; width: 55%\">\n          <button type=\"button\" (click)=\"onNextAvailability()\"\n                  class=\"btn btn-outline-success\">\n            disponível a partir de {{availableOnDate}}\n          </button>\n        </div>\n\n        <ng-template #available>\n\n          <div class=\"ml-2 ml-md-0 col-md-3\">\n          </div>\n\n          <div *ngFor=\"let doctor of doctors;  let i = index \" class=\"col-4 availabilities-wrapper col-md-2\">\n            <div *ngIf=\"doctor.length > 0; else noAvailability\" style=\"width: 100%\">\n              <button *ngFor=\"let a of doctor | time | slice:0:availabilityAmount[i]\"\n                      type=\"button\"\n                      (click)=\"openModal(a.availability.time, i)\"\n                      class=\"btn btn-outline-success\">\n                <div>{{a.availability.time}}</div>\n                <div *ngIf=\"!isFromSP\" class=\"price\">{{getSmallerPrice(a.availability.time, i)}}</div>\n              </button>\n              <button *ngIf=\"availabilityAmount[i] === 5 && doctors[i].length > 5\"\n                      type=\"button\" (click)=\"availabilityAmount[i] = doctors[i].length \"\n                      class=\"btn btn-outline-success\">mais\n              </button>\n            </div>\n\n          </div>\n\n          <ng-template #noAvailability>\n            <div>\n              <button *ngFor=\"let e of [1,2,3,4,5,6]\" type=\"button\" class=\"btn btn-outline-not-available\"> -</button>\n            </div>\n          </ng-template>\n\n\n          <div class=\"col-md-3\">\n          </div>\n\n        </ng-template>\n\n      </ng-template>\n\n\n    </article>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/availability/availability.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  padding: 20px 0 0 0; }\n  .card .title-wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #e8e8e8; }\n    .card .title-wrapper .title {\n      color: #0365c1;\n      margin-bottom: 3px;\n      font-size: 20px; }\n      @media (min-width: 768px) {\n        .card .title-wrapper .title {\n          font-size: 24px; } }\n    .card .title-wrapper .subtitle {\n      font-size: 10px;\n      color: #aaa;\n      text-align: center; }\n  .card .loader-wrapper {\n    width: 100%; }\n  .card .calendar-container {\n    text-align: center;\n    margin-top: 20px; }\n    .card .calendar-container .col-3:nth-of-type(3) {\n      margin: 0 5px; }\n      @media (min-width: 768px) {\n        .card .calendar-container .col-3:nth-of-type(3) {\n          margin: 0; } }\n    .card .calendar-container .date {\n      color: #0365c1;\n      font-size: 20px;\n      font-weight: 600;\n      margin-bottom: 5px; }\n    .card .calendar-container .weekday {\n      font-size: 13px;\n      color: #aaa; }\n    .card .calendar-container .arrow-back-wrapper {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n    .card .calendar-container .arrow-forward-wrapper {\n      display: -ms-flexbox;\n      display: flex; }\n    .card .calendar-container i {\n      font-size: 45px;\n      color: #f0c400; }\n  .card .schedule-container {\n    margin: 10px 0; }\n    .card .schedule-container .availabilities-wrapper {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: center;\n          align-items: center; }\n    .card .schedule-container div {\n      text-align: center; }\n    .card .schedule-container .btn-outline-success, .card .schedule-container .btn-outline-not-available {\n      color: #39ca74;\n      border: 2px solid #39ca74;\n      margin: 5px 0;\n      font-size: 18px;\n      padding: 5px 5px;\n      height: 65px;\n      width: calc(100% - 10px); }\n      @media (min-width: 480px) {\n        .card .schedule-container .btn-outline-success, .card .schedule-container .btn-outline-not-available {\n          padding: 10px 15px; } }\n      .card .schedule-container .btn-outline-success:hover, .card .schedule-container .btn-outline-not-available:hover {\n        background-color: #39ca74;\n        color: white;\n        border: 2px solid #39ca74; }\n        .card .schedule-container .btn-outline-success:hover .price, .card .schedule-container .btn-outline-not-available:hover .price {\n          color: white; }\n    .card .schedule-container .btn-outline-not-available {\n      pointer-events: none;\n      color: #dbdbdb;\n      background-color: white;\n      border: 2px solid #dbdbdb; }\n  .card .price {\n    margin-top: 5px;\n    font-size: 11px;\n    color: #9d9d9d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/availability/availability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_reduce__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_locale_pt_br__ = __webpack_require__("../../../../moment/locale/pt-br.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_locale_pt_br___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_locale_pt_br__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_search__ = __webpack_require__("../../../../../src/app/models/search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_location_modal_location_modal_component__ = __webpack_require__("../../../../../src/app/components/location-modal/location-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_utils__ = __webpack_require__("../../../../../src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tracking_service__ = __webpack_require__("../../../../../src/app/services/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_mix_panel_service__ = __webpack_require__("../../../../../src/app/services/mix-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AvailabilityComponent = (function () {
    function AvailabilityComponent(router, apiService, scheduleService, trackingService, mixPanelService, modalService) {
        this.router = router;
        this.apiService = apiService;
        this.scheduleService = scheduleService;
        this.trackingService = trackingService;
        this.mixPanelService = mixPanelService;
        this.modalService = modalService;
        this.log = __WEBPACK_IMPORTED_MODULE_15_ng2_logger__["Log"].create('AvailabilityComponent');
        this.availabilityAmount = [5, 5, 5];
        this.isFromSP = false;
        this.dates = [__WEBPACK_IMPORTED_MODULE_7_moment__().add(1, 'd'), __WEBPACK_IMPORTED_MODULE_7_moment__().add(2, 'd'), __WEBPACK_IMPORTED_MODULE_7_moment__().add(3, 'd')];
    }
    AvailabilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.scheduleService.user;
        this.doctors = this.scheduleService.searchResults;
        this.isFromSP = this.user.locality.state.localeCompare('SP') === 0;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.trackingService.onRequestAppointment(this.user)
            .map(function (id) { return _this.user.databaseID = _this.scheduleService.databaseID; })
            .mergeMap(function () { return _this.getAvailabilities(); })
            .subscribe(function (resp) { return _this.setAvailabilities(resp); });
    };
    AvailabilityComponent.prototype.init = function () {
        this.doctors = this.availableOnDate = null;
    };
    AvailabilityComponent.prototype.openModal = function (time, index) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_11__components_location_modal_location_modal_component__["a" /* LocationModalComponent */], { size: 'lg' });
        modalRef.componentInstance.doctors = this.sortFromSmallerPrice(time, index);
        this.scheduleService.user.schedule = modalRef.componentInstance.doctors[0];
        this.trackingService.onTimeSelected(this.scheduleService.user);
    };
    AvailabilityComponent.prototype.sortFromSmallerPrice = function (time, index) {
        return this.doctors[index]
            .filter(function (d) { return d.availability.time === time; })
            .sort(function (a, b) { return a.price_decimal - b.price_decimal; });
    };
    AvailabilityComponent.prototype.getSmallerPrice = function (time, index) {
        return this.sortFromSmallerPrice(time, index)[0].price;
    };
    AvailabilityComponent.prototype.isPrevPossible = function () {
        return __WEBPACK_IMPORTED_MODULE_7_moment__().add(1, 'd').isSameOrAfter(this.dates[0]);
    };
    AvailabilityComponent.prototype.formatWeekDay = function (date) {
        return __WEBPACK_IMPORTED_MODULE_12__utils_utils__["a" /* Utils */].formatWeekDay(date);
    };
    AvailabilityComponent.prototype.onNextorPrevDates = function (daysFromNow) {
        var _this = this;
        var d = this.dates[0].add(daysFromNow, 'd');
        this.dates = [d, this.dates[1].add(daysFromNow, 'd'), this.dates[2].add(daysFromNow, 'd')];
        this.getAvailabilities(d.format('YYYY-MM-DD'))
            .subscribe(function (resp) { return _this.setAvailabilities(resp); });
    };
    AvailabilityComponent.prototype.onNextAvailability = function () {
        var _this = this;
        var d = __WEBPACK_IMPORTED_MODULE_7_moment__(this.availableOnDate, 'DD/MM/YYYY');
        this.availableOnDate = null;
        this.dates = [d, __WEBPACK_IMPORTED_MODULE_7_moment__(d).add(1, 'd'), __WEBPACK_IMPORTED_MODULE_7_moment__(d).add(2, 'd')];
        this.getAvailabilities(d.format('YYYY-MM-DD'))
            .subscribe(function (resp) { return _this.setAvailabilities(resp); });
    };
    AvailabilityComponent.prototype.getAvailabilities = function (date) {
        this.init();
        return this.scheduleService.getAvailabilities(this.user.speciality.id, this.user.coordinates.lat, this.user.coordinates.lng, date);
    };
    AvailabilityComponent.prototype.isResultEmpty = function () {
        return (this.doctors[0].length === 0 && this.doctors[1].length === 0 && this.doctors[2].length === 0) && !this.availableOnDate;
    };
    AvailabilityComponent.prototype.setAvailabilities = function (resp) {
        this.scheduleService.searchResults = this.doctors = this.setAvailabilitiesArray(resp);
        if (this.isResultEmpty()) {
            this.trackingService.OnEmptyResult(this.user);
            this.router.navigate(['sem-resultados'], { skipLocationChange: true });
        }
        else
            this.mixPanelService.onAvailability(this.user);
    };
    AvailabilityComponent.prototype.setAvailabilitiesArray = function (response) {
        var _this = this;
        var perDay = [];
        this.log.info('Response', response);
        response
            .filter(function (doctor) { return doctor.schedules && doctor.schedules.length > 0; })
            .forEach(function (doctor) {
            doctor.schedules
                .filter(function (schedule) { return _this.dates.filter(function (d) { return d.isSame(__WEBPACK_IMPORTED_MODULE_7_moment__(schedule.date), 'd'); }).length > 0; })
                .forEach(function (schedule) {
                schedule.availabilities
                    .forEach(function (availability) {
                    var index = schedule.date;
                    if (typeof perDay[index] !== 'object')
                        perDay[index] = [];
                    perDay[index].push(new __WEBPACK_IMPORTED_MODULE_9__models_search__["a" /* Search */](index, doctor.price, doctor.price_decimal, doctor.name, doctor.address, availability, doctor.avatar, doctor.auto_confirmation || false, doctor.service_location_profile));
                });
            });
        });
        if (Object.keys(perDay).length === 0 && response.length > 0)
            this.checkCloserAvailability(response);
        return this.sortAvailabilities(perDay);
    };
    AvailabilityComponent.prototype.checkCloserAvailability = function (response) {
        var thirtyDays = __WEBPACK_IMPORTED_MODULE_7_moment__().add(30, 'd').format('YYYY-MM-DD');
        var val = response.map(function (c) {
            return c.schedules.reduce(function (acc, sch) {
                return sch.date.localeCompare(acc) < 0 ? sch.date : acc;
            }, thirtyDays);
        })[0];
        if (thirtyDays.localeCompare(val) !== 0)
            this.availableOnDate = __WEBPACK_IMPORTED_MODULE_7_moment__(val).format('DD/MM/YYYY');
    };
    AvailabilityComponent.prototype.sortAvailabilities = function (perDay) {
        var _this = this;
        var arr = [];
        this.dates.forEach(function (d) {
            var date = d.format('YYYY-MM-DD');
            var temp = perDay[date];
            if (temp) {
                var i = arr.push(temp);
                arr[i - 1] = arr[i - 1]
                    .sort(function (a, b) { return a.availability.time.localeCompare(b.availability.time); })
                    .filter(function (a) { return _this.checkBusinessRuleAvailability(date, a.availability.time); });
            }
            else
                arr.push([]);
        });
        return arr;
    };
    AvailabilityComponent.prototype.checkBusinessRuleAvailability = function (date, time) {
        var now = __WEBPACK_IMPORTED_MODULE_7_moment__();
        var comparedDate = __WEBPACK_IMPORTED_MODULE_7_moment__(date + ' ' + time, 'YYYY-MM-DD HH:mm');
        return now.isAfter(__WEBPACK_IMPORTED_MODULE_7_moment__().hour(15).minute(0), 's') &&
            comparedDate.isAfter(__WEBPACK_IMPORTED_MODULE_7_moment__().add('1', 'd').hour(13).minute(0), 's') || now.isSameOrBefore(__WEBPACK_IMPORTED_MODULE_7_moment__().hour(15).minute(0), 's');
    };
    AvailabilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-availability',
            template: __webpack_require__("../../../../../src/app/pages/availability/availability.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/availability/availability.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_13__services_tracking_service__["a" /* TrackingService */],
            __WEBPACK_IMPORTED_MODULE_14__services_mix_panel_service__["a" /* MixPanelService */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AvailabilityComponent);
    return AvailabilityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"request-container justify-content-center row pt-sm-3 pt-1\">\n  <div class=\"card col-10  col-sm-8 col-md-6 col-lg-6 col-xl-4 \">\n\n    <form class=\"card-body\" (submit)=\"onSubmit()\">\n      <a routerLink=\"/disponibilidade\" class=\"back-arrow\"> <i class=\"material-icons\">keyboard_arrow_left</i></a>\n      <h4 class=\"title\"> Tá Quase!</h4>\n\n      <div class=\"form-group mb-2\">\n        <label [ngClass]=\"{ 'error-label': validation && !fullName}\"\n               for=\"fullName\">{{user.who_will_consult.localeCompare('other_person') === 0 ?\n          'Confirme o nome completo do paciente' :'Confirme o seu nome completo' }}\n          <span class=\"mandatory\"> * </span></label>\n        <input [ngClass]=\"{ 'error': validation && !fullName}\"\n               name=\"fullName\" [(ngModel)]=\"fullName\" class=\"form-control\" id=\"fullName\" placeholder=\"Nome e Sobrenome\">\n      </div>\n\n      <div class=\"form-check mb-3\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\"\n                 (change)=\"onWhoWillConsult($event)\" name=\"whoWillConsult\"\n          > A consulta é pra outra pessoa\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label [ngClass]=\"{ 'error-label': validation && !user.birthdate}\"\n               for=\"birthdate\">\n          {{user.who_will_consult.localeCompare('other_person') === 0 ?\n          'Confirme a data de nascimento do paciente' :\n          'Confirme sua data de nascimento'}}\n          <span class=\"mandatory\"> * </span></label>\n        <input [ngClass]=\"{ 'error': validation && !user.birthdate}\"\n               [textMask]=\"{mask: birthdateMask, keepCharPositions: true, pipe: autoCorrectedDatePipe}\"\n               name=\"birthdate\" [(ngModel)]=\"user.birthdate\" class=\"form-control\" id=\"birthdate\"\n               placeholder=\"Ex: 10/10/1970\">\n      </div>\n\n    <app-consultation-detail-card [user]=\"user\">\n    </app-consultation-detail-card>\n\n\n      <p class=\"message mt-2 mb-3\"><span class=\"mandatory\"> * </span> O pagamento é feito na própria clínica</p>\n      <p class=\"message mt-2 mb-3\"><span class=\"mandatory\"> ** </span>Os dados da clínica serão enviados após a\n        confirmação </p>\n\n      <div class=\"btn-submit-wrapper\">\n        <button [disabled]=\"confirming\" type=\"submit\" class=\"btn btn-submit\">\n          <img *ngIf=\"confirming\" src=\"assets/icons/spinner.svg\" alt=\"\">\n          <span *ngIf=\"!confirming\"> Confirmar sua consulta</span>\n        </button>\n      </div>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/confirmation/confirmation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  border-radius: 5px; }\n\n.title {\n  color: #0365c1;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8; }\n\n.selection-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin-bottom: 20px; }\n\n.password-wrapper {\n  border-top: 1px solid #e8e8e8;\n  padding-top: 10px;\n  margin-top: 10px; }\n\n.message {\n  color: #0365c1;\n  font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_masks__ = __webpack_require__("../../../../../src/app/utils/masks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("../../../../../src/app/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_tracking_service__ = __webpack_require__("../../../../../src/app/services/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createAutoCorrectedDatePipe__ = __webpack_require__("../../../../text-mask-addons/dist/createAutoCorrectedDatePipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createAutoCorrectedDatePipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createAutoCorrectedDatePipe__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfirmationComponent = (function () {
    function ConfirmationComponent(scheduleService, router, modalService, trackingService) {
        this.scheduleService = scheduleService;
        this.router = router;
        this.modalService = modalService;
        this.trackingService = trackingService;
        this.validation = false;
        this.birthdateMask = __WEBPACK_IMPORTED_MODULE_3__utils_masks__["a" /* Masks */].birthdateMask();
        this.fullName = '';
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.autoCorrectedDatePipe = __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_createAutoCorrectedDatePipe___default()('dd/mm/yyyy');
        this.user = this.scheduleService.user;
        this.fullName = this.user.name + " " + this.user.lastName;
        this.userName = this.user.name;
        this.user.who_will_consult = 'me';
    };
    ConfirmationComponent.prototype.onWhoWillConsult = function (event) {
        if (event.target.checked) {
            this.user.name = '';
            this.user.who_will_consult = 'other_person';
        }
        else {
            this.user.name = this.userName;
            this.user.who_will_consult = 'me';
        }
    };
    ConfirmationComponent.prototype.isBirthdateInvalid = function () {
        if (!this.user.birthdate || this.user.birthdate.length === 0)
            return true;
        else {
            var b = this.user.birthdate.replace(/\D+/g, '');
            return b.length !== 8;
        }
    };
    ConfirmationComponent.prototype.validateFields = function () {
        return this.fullName.length > 0 &&
            !this.isBirthdateInvalid();
    };
    ConfirmationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.validation = true;
        if (this.validateFields()) {
            this.scheduleService.user = this.user;
            this.confirming = true;
            this.trackingService.onConfirmAppointment(__assign({}, this.user, { name: this.fullName }))
                .subscribe(function (data) {
                _this.scheduleService.databaseID = data.id;
                _this.openModal();
                _this.confirming = false;
            }, function (err) { return _this.confirming = false; });
        }
    };
    ConfirmationComponent.prototype.openModal = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */], { size: 'lg', backdrop: 'static' });
    };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__("../../../../../src/app/pages/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6__services_tracking_service__["a" /* TrackingService */]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/confirmed-link/confirmed-link.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"justify-content-center row pt-sm-3 pt-1\" style=\"min-height: 550px\">\n  <div class=\"card col-10  col-sm-8 col-md-6 col-lg-6 col-xl-4 \">\n\n    <div *ngIf=\"!isLoading; else loading\" style=\"text-align: center\">\n\n      <h6 class=\"msg\" *ngIf=\"error; else noError\">\n        {{error}}\n      </h6>\n\n      <ng-template #noError>\n\n        <h6 *ngIf=\"autoConfirmation; else noAutoConfirmation\" class=\"msg\">\n          Oba! Sua solicitação foi confirmada com sucesso! Em breve, você receberá o comprovante da sua consulta\n        </h6>\n        <ng-template #noAutoConfirmation>\n          <h6 class=\"msg\">\n            Oba! Obrigado pela solicitação de consulta.\n            Em breve a nossa equipe de atendimento irá verificar o horário com a clínica e entrará em contato com você\n            para confirmar seu agendamento!\n            Fique ligado ;)\n          </h6>\n        </ng-template>\n\n      </ng-template>\n\n      <p class=\"contacts\">\n        Para mais informações, ligue 4020-2359\n        <br/>\n        <small>Atendimento de Seg a Sex das 9h até as 18h.</small> <br>\n      </p>\n      <p *ngIf=\"error\"  class=\"contacts mt-4\">Para agendar uma nova consulta, acesse:\n        <a routerLink=\"\">http://marcar.doutorja.com.br/ </a>\n      </p>\n\n    </div>\n\n    <ng-template #loading>\n      <app-loader style=\"height: 100%;\"></app-loader>\n    </ng-template>\n\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/confirmed-link/confirmed-link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.msg {\n  color: #0365c1;\n  line-height: 26px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e8e8e8;\n  font-size: 18px; }\n  @media (min-width: 768px) {\n    .msg {\n      margin: 10px 30px; } }\n\n.contacts {\n  font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/confirmed-link/confirmed-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmedLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_azure_service__ = __webpack_require__("../../../../../src/app/services/azure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mix_panel_service__ = __webpack_require__("../../../../../src/app/services/mix-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmedLinkComponent = (function () {
    function ConfirmedLinkComponent(activatedRoute, azureService, mixPanelService) {
        this.activatedRoute = activatedRoute;
        this.azureService = azureService;
        this.mixPanelService = mixPanelService;
    }
    ConfirmedLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var response = {};
        this.activatedRoute.params
            .mergeMap(function (q) { return _this.azureService.getConsultation(q.id); })
            .map(function (val) {
            response = val;
            var date = __WEBPACK_IMPORTED_MODULE_5_moment__(val.date._ + " " + val.time._, 'DD/MM/YYYY HH:mm');
            var diff = date.diff(__WEBPACK_IMPORTED_MODULE_5_moment__(), 'h');
            if (diff < 13) {
                response.error = "Link de confirmacao clicado em " + diff + " horas antes da consulta";
                _this.error = "Ol\u00E1 " + val.name._ + ", infelizmente o hor\u00E1rio escolhido n\u00E3o est\u00E1 mais dispon\u00EDvel :(";
            }
            return response;
        })
            .map(function () {
            _this.autoConfirmation = response.workPlaceAutoConfirmation
                ? response.workPlaceAutoConfirmation._
                : null;
            _this.mixPanelService.onValidate(response);
            if (!response.error)
                _this.autoConfirmation
                    ? _this.mixPanelService.onValidateAutoConfirmation()
                    : _this.mixPanelService.onValidateNoAutoConfirmation();
        })
            .filter(function () {
            var shouldValidate = response.stepNumber._ > -1 && response.stepNumber._ !== 5;
            return (_this.isLoading = shouldValidate);
        })
            .mergeMap(function (val) {
            return _this.azureService.setConfirmed({
                databaseID: response.RowKey,
                error: response.error
            });
        })
            .subscribe(function () {
            _this.isLoading = false;
        }, function (err) {
            _this.error = 'Consulta não encontrada';
            _this.isLoading = false;
        });
    };
    ConfirmedLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmed-link',
            template: __webpack_require__("../../../../../src/app/pages/confirmed-link/confirmed-link.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/confirmed-link/confirmed-link.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_azure_service__["a" /* AzureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_mix_panel_service__["a" /* MixPanelService */]])
    ], ConfirmedLinkComponent);
    return ConfirmedLinkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/finalized/finalized.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"finalized-container row \">\n  <div class=\"card col-10  col-sm-8 col-md-6 col-lg-6 col-xl-4 \">\n\n    <div class=\"card-body\">\n      <h4 class=\"title\"> Pronto, <b>{{user.name}}</b> :)</h4>\n\n      <p style=\"color: #555\">\n        Enviaremos em instantes uma mensagem de texto no seu celular. Clique no link na mensagem\n        para validar o pedido. </p>\n\n      <p class=\"contact_phone\">\n        Para mais informações, ligue 4020-2359\n        <br/>\n        <small>Atendimento de Seg a Sex das 9h até as 18h.</small>\n      </p>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/finalized/finalized.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".finalized-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  min-height: calc(100vh - 220px); }\n  @media (min-width: 768px) {\n    .finalized-container {\n      min-height: calc(100vh - 180px); } }\n\np {\n  margin-bottom: 5px; }\n\n.form-control {\n  border-radius: 5px; }\n\n.title {\n  color: #0365c1;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8; }\n\n.finalized-container p {\n  text-align: center; }\n\n.contact_phone {\n  margin-top: 15px;\n  color: #279051; }\n\n.email-container {\n  padding-top: 10px;\n  margin-top: 20px;\n  border-top: 1px solid #e8e8e8; }\n\n.input-group {\n  width: 100%; }\n  @media (min-width: 768px) {\n    .input-group {\n      width: 80%; } }\n\n.btn-default {\n  background-color: #39ca74;\n  color: white; }\n\n.email-success {\n  color: #39ca74;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  .email-success .material-icons {\n    color: #39ca74;\n    margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/finalized/finalized.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__ = __webpack_require__("../../../../../src/app/services/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinalizedComponent = (function () {
    // isEmailSent = false;
    // isLoading = false;
    function FinalizedComponent(trackingService, scheduleService) {
        this.trackingService = trackingService;
        this.scheduleService = scheduleService;
    }
    FinalizedComponent.prototype.ngOnInit = function () {
        this.user = this.scheduleService.user;
        this.setUserToLocalStorage();
    };
    FinalizedComponent.prototype.setUserToLocalStorage = function () {
        var storage = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"])(this.user);
        this.user.databaseID = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"])(this.scheduleService.databaseID);
        storage.databaseID = this.scheduleService.databaseID = storage.expiration = null;
        localStorage.setItem('user', JSON.stringify(storage));
    };
    FinalizedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finalized',
            template: __webpack_require__("../../../../../src/app/pages/finalized/finalized.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/finalized/finalized.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_schedule_service__["a" /* ScheduleService */]])
    ], FinalizedComponent);
    return FinalizedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/no-results/no-results.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"no-results-container row \">\n  <div class=\"card col-10  col-sm-8 col-md-6 col-lg-6 col-xl-4 \">\n\n    <div class=\"card-body\">\n      <h4 class=\"title\"> Ops!</h4>\n      <p class=\"title-text\">\n        Não temos um {{speciality}} que atende no local que você selecionou. :(\n      </p>\n\n      <button routerLink=\"\" type=\"button\" class=\"btn btn-link mt-2\">Tentar em outro local</button>\n\n      <div class=\"d-none d-sm-block mt-2\">\n        <p class=\"call-text\">\n          Se preferir, ligue pra gente que temos mais opções para você ;)\n        </p>\n        <p style=\"color: #39ca74; font-size: 18px;font-weight: bold\">\n          <i class=\"fa fa-phone mr-1\" aria-hidden=\"true\"></i>\n          4020-2359</p>\n      </div>\n\n      <div class=\"d-sm-none mt-2\">\n        <p class=\"call-text\">\n          Se preferir, clique no botão abaixo para entrar em contato com a nossa equipe que temos mais opções para você\n          ;)\n        </p>\n        <a href=\"tel:40202359\" class=\"btn btn-outline-success mt-2\">\n          <i class=\"fa fa-phone mr-1\" aria-hidden=\"true\"></i>\n          4020-2359\n        </a>\n\n      </div>\n\n      <!-- <h5>Não foi encontrado nenhum profissional dessa especialidade na área procurada :(</h5> -->\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/no-results/no-results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-results-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  min-height: calc(100vh - 220px); }\n  @media (min-width: 768px) {\n    .no-results-container {\n      min-height: calc(100vh - 180px); } }\n\np {\n  margin-bottom: 5px; }\n\n.btn-link {\n  text-decoration: underline;\n  color: #0365c1; }\n\n.btn-outline-success {\n  border-color: #39ca74;\n  color: #39ca74; }\n  .btn-outline-success:hover {\n    border-color: #39ca74;\n    background-color: #39ca74;\n    color: #fff; }\n\n.title-text {\n  font-size: 14px; }\n  @media (min-width: 768px) {\n    .title-text {\n      font-size: 16px; } }\n\n.call-text {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 14px; }\n\n.card-body {\n  text-align: center; }\n\n.title {\n  color: #0365c1;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/no-results/no-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoResultsComponent = (function () {
    function NoResultsComponent(scheduleService) {
        this.scheduleService = scheduleService;
        this.speciality = '';
    }
    NoResultsComponent.prototype.ngOnInit = function () {
        this.speciality = this.scheduleService.user.speciality.name;
    };
    NoResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-no-results',
            template: __webpack_require__("../../../../../src/app/pages/no-results/no-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/no-results/no-results.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */]])
    ], NoResultsComponent);
    return NoResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/receipt/receipt.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"justify-content-center row pt-sm-3 pt-1\" style=\"min-height: 550px\">\n  <div class=\"card col-10  col-sm-8 col-md-6 col-lg-6 col-xl-4 \">\n\n\n    <h4 class=\"not-found\" *ngIf=\"errorMsg; else noError\"> {{errorMsg}}</h4>\n\n\n    <ng-template #noError>\n\n      <div *ngIf=\"consultation; else loading\" class=\"receipt\">\n\n\n          <p class=\"title\"> Olá <b>{{consultation.name}}</b>! <br> <span class=\"subtitle\">Seguem as informações da sua consulta: </span></p>\n\n\n        <section class=\"info\">\n          <img class=\"info__img\" [src]=\"consultation.avatar\" alt=\"\">\n          <header class=\"info__content\">\n            <h6 class=\"info__content__place\"> {{consultation.workPlace}}</h6>\n            <p class=\"info__content__speciality\"> {{consultation.speciality}}</p>\n          </header>\n        </section>\n\n        <section class=\"date\">\n          <p>Data</p>\n          <p class=\"date__value\">{{formatDate()}}</p>\n\n        </section>\n\n        <section class=\"price\">\n          <p>Preço</p>\n          <p class=\"price__value\">R$ {{consultation.price.toFixed(2).replace('.',',')}}</p>\n        </section>\n\n        <section class=\"location\">\n          <p>Endereço</p>\n          <p class=\"location__value\"> {{consultation.workPlaceAddress}}</p>\n\n          <p class=\"location__orderOfArrival\" *ngIf=\"consultation.workPlaceOrderOfArrival\">\n            * Obs: chegue cedo à sua consulta!\n            Por ser por ordem de chegada, o profissional permanece disponível enquanto houverem pacientes.\n          </p>\n\n          <div id=\"map\"></div>\n        </section>\n\n\n      </div>\n\n      <ng-template #loading>\n\n        <app-loader style=\"height: 100%;\"></app-loader>\n\n      </ng-template>\n\n    </ng-template>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/receipt/receipt.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-found {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center; }\n\n.receipt {\n  text-align: center;\n  height: 100%; }\n\np {\n  color: #aaa;\n  font-size: 13px;\n  margin-bottom: 5px; }\n\n.info {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: 15px;\n  -ms-flex-align: center;\n      align-items: center; }\n  @media (min-width: 768px) {\n    .info {\n      -ms-flex-direction: column;\n          flex-direction: column; } }\n  .info__img {\n    margin-bottom: 20px;\n    border-radius: 50%;\n    box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.4);\n    height: 80px;\n    width: 80px; }\n  .info__content {\n    padding: 0 0 0 20px; }\n    @media (min-width: 768px) {\n      .info__content {\n        padding: 0; } }\n    .info__content__place {\n      color: #0365c1;\n      font-size: 18px; }\n    .info__content__speciality {\n      color: #8b8b8b;\n      font-size: 14px; }\n\n.date__value, .price__value, .location__value, .title {\n  color: #0365c1;\n  font-size: 16px;\n  margin-bottom: 15px; }\n\n.title {\n  margin-top: 15px;\n  font-size: 18px; }\n  @media (min-width: 768px) {\n    .title {\n      font-size: 20px; } }\n\n.subtitle {\n  font-size: 12px;\n  color: #aaa; }\n  @media (min-width: 768px) {\n    .subtitle {\n      font-size: 14px; } }\n\n.location__value {\n  margin-bottom: 5px; }\n\n.location__orderOfArrival {\n  color: red;\n  font-size: 12px; }\n  @media (min-width: 768px) {\n    .location__orderOfArrival {\n      font-size: 14px; } }\n\n#map {\n  height: 200px;\n  margin-bottom: 10px; }\n  @media (min-width: 768px) {\n    #map {\n      height: 300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/receipt/receipt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_azure_service__ = __webpack_require__("../../../../../src/app/services/azure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_consultation__ = __webpack_require__("../../../../../src/app/models/consultation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_locale_pt_br__ = __webpack_require__("../../../../moment/locale/pt-br.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_locale_pt_br___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_locale_pt_br__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReceiptComponent = (function () {
    function ReceiptComponent(azureService, activatedRoute) {
        this.azureService = azureService;
        this.activatedRoute = activatedRoute;
        this.log = __WEBPACK_IMPORTED_MODULE_6_ng2_logger__["Log"].create('ReceiptComponent');
    }
    ReceiptComponent_1 = ReceiptComponent;
    ReceiptComponent.prototype.isGoogleUp = function () {
        var _this = this;
        window['__onGoogleLoaded'] = function (ev) {
            _this.log.info('google maps api loaded');
        };
    };
    ReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isGoogleUp();
        this.errorMsg = null;
        this.activatedRoute.params
            .mergeMap(function (q) { return _this.azureService.getConsultation(q.id); })
            .subscribe(function (val) {
            _this.consultation = new __WEBPACK_IMPORTED_MODULE_3__models_consultation__["a" /* Consultation */](val.name._, val.Timestamp._, val.avatar._, val.birthdate._, val.state._, val.city._, val.neighborhood._, val.date._, val.workPlaceLat._, val.workPlaceLng._, val.phone._, val.price._, val.speciality._, val.time._, val.workPlace._, val.workPlaceAddress._, val.workPlaceOrderOfArrival ? val.workPlaceOrderOfArrival._ : null);
            _this.log.info('consultation', _this.consultation);
            _this.setMap();
        }, function (error) { return _this.errorMsg = 'Nenhuma consulta encontrada :('; });
    };
    ReceiptComponent.prototype.setMap = function () {
        var _this = this;
        setTimeout(function () {
            ReceiptComponent_1.coord = new google.maps.LatLng(_this.consultation.lat, _this.consultation.lng);
            var map = new google.maps.Map(document.getElementById('map'), {
                center: ReceiptComponent_1.coord,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true,
            });
            var marker = new google.maps.Marker({
                position: ReceiptComponent_1.coord,
                icon: 'assets/icons/ic_pin_drja.svg'
            });
            marker.setMap(map);
        }, 500);
    };
    ReceiptComponent.prototype.formatDate = function () {
        var d = __WEBPACK_IMPORTED_MODULE_4_moment__(this.consultation.date + this.consultation.time, 'DD/MM/YYYY HH:mm');
        var date = d.format('dddd') + ", " + d.format('D') + " de " + d.format('MMMM') + " - ";
        if (!this.consultation.workPlaceOrderOfArrival)
            return date + this.consultation.time;
        else {
            return date + " a partir de " + d.format('HH') + ":00";
        }
    };
    ReceiptComponent = ReceiptComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-receipt',
            template: __webpack_require__("../../../../../src/app/pages/receipt/receipt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/receipt/receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_azure_service__["a" /* AzureService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ReceiptComponent);
    return ReceiptComponent;
    var ReceiptComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/pages/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"request-container justify-content-center row pt-sm-3 pt-1\">\n  <div class=\"card col-10  col-sm-8 col-md-6 col-lg-6 col-xl-4 \">\n    <article class=\"logo-container row\">\n      <div class=\"col-12\">\n          <img class=\"escudo\" src=\"assets/images/escudo.png\">\n          <img class=\"brand\" src=\"assets/images/logo-i@2x.png\">\n      </div>\n      <div class=\"col-12 logo-info-container\">\n        <h4 class=\"logo-container-title\">Nós Marcamos a sua <span\n          class=\"logo-container-title--text\">consulta médica!</span></h4>\n        <p class=\"logo-container-title-2\">Consultas que cabem no seu bolso!</p>\n        <p class=\"logo-container-subtitle\">Preencha os campos abaixo e escolha\n          o melhor horário na clínica mais perto de você.</p>\n        <!-- <p>Consultas que cabem no seu bolso!</p> -->\n        <!-- <p class=\"logo-container-time\">Atendimento de Seg a Sex das 9h as 18h.</p> -->\n      </div>\n    </article>\n    <form class=\"card-body col-12 col-md-10 mx-auto\" (submit)=\"onSubmit()\" ngNativeValidate>\n\n      <div class=\"form-group \">\n        <label [ngClass]=\"{ 'error-label': checkValidation(user.speciality.name, 'Selecione a Especialidade') }\"\n               for=\"speciality\">Olá, qual especialidade você busca?<span class=\"mandatory\"> * </span></label>\n        <select [(ngModel)]=\"speciality\" name=\"speciality\" class=\"form-control\" id=\"speciality\"\n                (ngModelChange)=\"onChangeSpeciality($event)\"\n                [ngClass]=\"{ 'error': checkValidation(user.speciality.name, 'Selecione a Especialidade') }\">\n          <option disabled selected>Selecione a Especialidade</option>\n          <option [ngValue]=\"s\" *ngFor=\"let s of json.specialities\">{{s.name}}</option>\n        </select>\n      </div>\n\n      <app-location-select [validation]=\"validation\" (locality)=\"onLocality($event)\"\n                           (coordinates)=\"onCoordinates($event)\"></app-location-select>\n\n      <div class=\"row\">\n        <div class=\"form-group col-6\">\n          <label [ngClass]=\"{ 'error-label': validation && !user.name}\"\n                 for=\"name\">Seu Nome <span class=\"mandatory\"> * </span></label>\n          <input [ngClass]=\"{ 'error': validation && !user.name}\"\n                 name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" id=\"name\" placeholder=\"Nome\">\n        </div>\n        <div class=\"form-group pl-0 col-6\">\n          <label [ngClass]=\"{ 'error-label': validation && !user.lastName}\"\n                 for=\"lastName\">e sobrenome <span class=\"mandatory\"> * </span></label>\n          <input [ngClass]=\"{ 'error': validation && !user.lastName}\"\n                 name=\"lastName\" [(ngModel)]=\"user.lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Sobrenome\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label [ngClass]=\"{ 'error-label': validation && isPhoneInvalid()}\"\n               for=\"phone\">Precisamos do seu telefone para enviarmos as informações da consulta <span class=\"mandatory\"> * </span></label>\n        <input [textMask]=\"{mask: phoneMask}\"\n               [ngClass]=\"{ 'error': validation && isPhoneInvalid()}\"\n               class=\"form-control\" name=\"phone\" [(ngModel)]=\"user.phone\" id=\"phone\"\n               placeholder=\"Celular com DDD para contato\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Seu email <span class=\"mandatory\"> * </span></label>\n        <input required\n               class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" id=\"email\"\n               placeholder=\"Email\">\n      </div>\n\n      <div class=\"btn-submit-container\">\n        <button type=\"submit\" class=\"btn btn-submit \">Solicitar Agendamento</button>\n      </div>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/request/request.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: transparent;\n  box-shadow: none;\n  border: none; }\n  .card label {\n    color: white;\n    font-size: 12px; }\n    @media (min-width: 768px) {\n      .card label {\n        font-size: 14px; } }\n  .card .logo-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin-top: 15px;\n    text-align: center; }\n    .card .logo-container .logo-info-container {\n      -ms-flex: auto;\n          flex: auto; }\n    .card .logo-container .escudo {\n      height: 60px;\n      display: inline-block;\n      margin-right: 20px; }\n      @media (min-width: 768px) {\n        .card .logo-container .escudo {\n          height: 80px; } }\n    .card .logo-container .brand {\n      height: 40px;\n      width: 210px;\n      display: inline-block; }\n      @media (min-width: 768px) {\n        .card .logo-container .brand {\n          height: 60px;\n          width: 320px; } }\n    .card .logo-container .logo-container-title {\n      margin-top: 30px;\n      font-size: 24px;\n      color: white;\n      font-weight: 700;\n      width: 120%;\n      margin-left: -10%; }\n      @media (min-width: 768px) {\n        .card .logo-container .logo-container-title {\n          margin-top: 40px;\n          font-size: 40px;\n          width: 180%;\n          margin-left: -40%; } }\n      .card .logo-container .logo-container-title--text {\n        color: #ffd51a; }\n    .card .logo-container .logo-container-title-2 {\n      color: white;\n      font-size: 18px;\n      font-weight: 700;\n      width: 160%;\n      margin-left: -30%; }\n      @media (min-width: 768px) {\n        .card .logo-container .logo-container-title-2 {\n          font-size: 26px; } }\n    .card .logo-container .logo-container-subtitle {\n      font-size: 13px;\n      color: rgba(255, 255, 255, 0.8);\n      font-weight: 300; }\n      @media (min-width: 768px) {\n        .card .logo-container .logo-container-subtitle {\n          font-size: 17px; } }\n      .card .logo-container .logo-container-subtitle--text {\n        font-size: 11px; }\n        @media (min-width: 768px) {\n          .card .logo-container .logo-container-subtitle--text {\n            font-size: 14px; } }\n    .card .logo-container .logo-container-time {\n      margin-bottom: 0;\n      font-size: 12px;\n      color: #b7b7b7;\n      font-weight: 300; }\n  .card .btn-submit-container {\n    text-align: center; }\n  .card .btn-submit {\n    margin-top: 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    background-color: #ffd51a;\n    color: #0365c1; }\n    .card .btn-submit:hover {\n      background-color: #024b8f;\n      color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_masks__ = __webpack_require__("../../../../../src/app/utils/masks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_json_service__ = __webpack_require__("../../../../../src/app/services/json.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__("../../../../../src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tracking_service__ = __webpack_require__("../../../../../src/app/services/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RequestComponent = (function () {
    function RequestComponent(jsonService, router, scheduleService, trackingService, apiService, activatedRoute) {
        this.jsonService = jsonService;
        this.router = router;
        this.scheduleService = scheduleService;
        this.trackingService = trackingService;
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.phoneMask = __WEBPACK_IMPORTED_MODULE_1__utils_masks__["a" /* Masks */].phoneMask();
        this.json = {
            specialities: [],
            prices: []
        };
        this.log = __WEBPACK_IMPORTED_MODULE_11_ng2_logger__["Log"].create('RequestComponent');
        this.speciality = 'Selecione a Especialidade';
        this.validation = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.log.info('Request ngOnInit');
        this.isUniqueUserEntered();
        this.setSelectFromJSON();
        this.scheduleService.init();
    };
    RequestComponent.prototype.isUniqueUserEntered = function () {
        if (!localStorage.getItem('unique-user')) {
            localStorage.setItem('unique-user', JSON.stringify(true));
            this.trackingService.onUniqueUser();
        }
    };
    RequestComponent.prototype.checkLocalStorage = function () {
        var _this = this;
        this.lStorage = localStorage.getItem('user');
        if (this.lStorage) {
            this.user = JSON.parse(this.lStorage);
            this.phoneTemp = this.user.phone;
            this.speciality = this.json.specialities
                .find(function (s) {
                return s.name.localeCompare(_this.user.speciality.name) === 0;
            });
        }
    };
    RequestComponent.prototype.setSelectFromJSON = function () {
        var _this = this;
        this.jsonService
            .getSpecialities()
            .map(function (s) { return _this.json.specialities = s; })
            .mergeMap(function () { return _this.activatedRoute.queryParams; })
            .subscribe(function (val) {
            _this.checkLocalStorage();
            if (val && val.especialidade)
                _this.checkQueryParams(val);
        });
        this.jsonService
            .getPrices()
            .subscribe(function (s) { return _this.json.prices = s; });
    };
    RequestComponent.prototype.checkQueryParams = function (val) {
        var result = this.json.specialities
            .find(function (s) {
            return __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */].simplifyString(s.name).localeCompare(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */].simplifyString(val.especialidade)) === 0;
        });
        if (result) {
            this.speciality = this.user.speciality = result;
        }
    };
    RequestComponent.prototype.onCoordinates = function (value) {
        this.user.coordinates = value;
        // this.getAvailabilities();
    };
    RequestComponent.prototype.onLocality = function (value) {
        this.user.locality = value;
    };
    RequestComponent.prototype.onChangeSpeciality = function (event) {
        this.user.speciality = event;
    };
    RequestComponent.prototype.checkValidation = function (str1, str2) {
        return __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */].checkValidation(this.validation, str1, str2);
    };
    RequestComponent.prototype.isPhoneInvalid = function () {
        if (!this.user.phone || this.user.phone.length === 0)
            return true;
        else {
            this.user.phone = this.user.phone.replace(/\D+/g, '');
            return this.user.phone.length !== 11;
        }
    };
    RequestComponent.prototype.validateFields = function () {
        return this.user.coordinates &&
            this.user.name && this.user.name.length > 0 &&
            this.user.lastName && this.user.lastName.length &&
            this.user.speciality.name.localeCompare('Selecione a Especialidade') !== 0 &&
            !this.isPhoneInvalid();
    };
    RequestComponent.prototype.onSubmit = function () {
        if (typeof this.speciality !== 'string')
            this.user.speciality = this.speciality;
        this.validation = true;
        if (this.validateFields()) {
            this.checkExpiration();
            this.router.navigate(['/disponibilidade']);
        }
        else {
            this.log.error('Erro na validação');
        }
    };
    RequestComponent.prototype.checkExpiration = function () {
        if (this.user.phone.localeCompare(this.phoneTemp) !== 0) {
            this.user.databaseID = this.scheduleService.databaseID = this.user.expiration = null;
        }
        if (!this.user.expiration || __WEBPACK_IMPORTED_MODULE_10_moment__().diff(this.user.expiration, 'h') > 0) {
            this.user.expiration = __WEBPACK_IMPORTED_MODULE_10_moment__().add(24, 'h');
        }
        if (this.user.isEmptyResult) {
            this.user.expiration = null;
            this.user.isEmptyResult = false;
        }
        this.scheduleService.user = this.user;
    };
    RequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request',
            template: __webpack_require__("../../../../../src/app/pages/request/request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_json_service__["a" /* JsonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_7__services_tracking_service__["a" /* TrackingService */],
            __WEBPACK_IMPORTED_MODULE_8__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (items, args) {
        return items.filter(function (item, pos, array) {
            return !pos || item.availability.time.localeCompare(array[pos - 1].availability.time) !== 0;
        });
    };
    TimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.ROOT = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.root;
        this.ID = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api.appID;
        this.log = __WEBPACK_IMPORTED_MODULE_3_ng2_logger__["Log"].create('ApiService');
    }
    ApiService.prototype.getDoctors = function (fields) {
        var URL = this.ROOT + "/search/service_locations.json?app_id=" + this.ID;
        URL += "&start_date=" + fields.start_date;
        URL += "&total_days=" + fields.total_days;
        if (fields.page_number)
            URL += "&per_page=" + fields.per_page;
        if (fields.page_number)
            URL += "&page=" + fields.page_number;
        if (fields.price_range_id)
            URL += "&price_id=" + fields.price_range_id;
        if (fields.speciality_id)
            URL += "&speciality_id=" + fields.speciality_id;
        if (fields.latitude)
            URL += "&latitude=" + fields.latitude;
        if (fields.longitude)
            URL += "&longitude=" + fields.longitude;
        if (fields.latitude && fields.longitude)
            URL += "&distance=" + fields.distance;
        this.log.info(URL.substring(URL.indexOf('&')));
        return this.http.get(URL).map(function (resp) { return resp.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(scheduleService, router) {
        this.scheduleService = scheduleService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.scheduleService.user) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/azure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AzureService = (function () {
    function AzureService(http) {
        this.http = http;
        this.ROOT = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].root;
    }
    AzureService.prototype.setRequestScheduler = function (obj) {
        return this.http.post(this.ROOT + '/scheduler', obj).map(function (resp) { return resp.json(); });
    };
    AzureService.prototype.setConfirmationLink = function (obj) {
        return this.http.post(this.ROOT + '/confirmationLink', obj).map(function (resp) { return resp.json(); });
    };
    AzureService.prototype.setConfirmed = function (obj) {
        return this.http.post(this.ROOT + '/confirmed', obj).map(function (resp) { return resp.json(); });
    };
    AzureService.prototype.getConsultation = function (id) {
        return this.http.get(this.ROOT + '/scheduler?id=' + id).map(function (resp) { return resp.json(); });
    };
    AzureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AzureService);
    return AzureService;
}());



/***/ }),

/***/ "../../../../../src/app/services/geocoder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeocoderService = (function () {
    function GeocoderService() {
        this.isGoogleUp()
            .subscribe(function () {
        });
    }
    GeocoderService.prototype.isGoogleUp = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (subscriber) {
            window['__onGoogleLoaded'] = function (ev) {
                _this.geocoder = new google.maps.Geocoder();
                _this.isGoogle = true;
                subscriber.next();
                subscriber.complete();
            };
        });
    };
    /**
     * Reverse geocoding by schedule.
     *
     * Wraps the Google Maps API geocoding service into an observable.
     *
     * @param latLng Location
     * @return An observable of GeocoderResult
     */
    GeocoderService.prototype.geocode = function (latLng) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            // Invokes geocode method of Google Maps API geocoding.
            _this.geocoder.geocode({ location: { lat: latLng[0], lng: latLng[1] } }, (
            // Results & status.
            function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    observer.error(status);
                }
            }));
        });
    };
    /**
     * Geocoding services.
     *
     * Wraps the Google Maps API geocoding service into an observable.
     *
     * @param address The address to be searched
     * @return An observable of GeocoderResult
     */
    GeocoderService.prototype.codeAddress = function (address) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            // Invokes geocode method of Google Maps API geocoding.
            _this.geocoder.geocode({ address: address }, (
            // Results & status.
            function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results);
                    observer.complete();
                }
                else {
                    observer.error(status);
                }
            }));
        });
    };
    GeocoderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GeocoderService);
    return GeocoderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/json.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsonService = (function () {
    function JsonService(http) {
        this.http = http;
        this.ROOTPATH = '../../assets/json/';
    }
    JsonService.prototype.getSpecialities = function () {
        return this.http.get(this.ROOTPATH + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].specialitiesJSON)
            .map(function (resp) {
            return resp.json().filter(function (s) { return !s.parent_id; });
        });
    };
    JsonService.prototype.getLocalities = function () {
        return this.http.get(this.ROOTPATH + 'localities.json')
            .map(function (resp) {
            return resp.json();
        });
    };
    JsonService.prototype.getPrices = function () {
        return this.http.get(this.ROOTPATH + 'prices.json')
            .map(function (resp) { return resp.json(); });
    };
    JsonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], JsonService);
    return JsonService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mix-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MixPanelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var MixPanelService = (function () {
    function MixPanelService() {
        this.log = __WEBPACK_IMPORTED_MODULE_2_ng2_logger__["Log"].create('MixPanelService');
    }
    MixPanelService.prototype.track = function (msg, payload) {
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            mixpanel.track(msg, payload);
        }
    };
    MixPanelService.prototype.onRequestAppointment = function (payload) {
        payload.phone = '+55' + payload.phone;
        this.log.info('Consultation Request LP', this.removeUnecessaryFields(payload));
        // Trackamento do Mixpanel no preenchimento do formulário no ambiente de produção
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            dataLayer.push({
                event: 'FormLeadP1',
                formpasso: 'Cadastro'
            });
            this.setIndentifyUser(payload);
            this.track('Consultation Request LP', this.removeUnecessaryFields(payload));
        }
    };
    MixPanelService.prototype.OnEmptyResult = function (payload) {
        var d = {
            isEmptyResult: payload.isEmptyResult,
            speciality: payload.speciality.name,
            schedule_city: payload.locality.city,
            schedule_state: payload.locality.state,
            schedule_neighborhood: payload.locality.neighborhood
        };
        this.log.info('MixPanelService OnEmptyResult', d);
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Result Unavailable LP', d);
            dataLayer.push({
                event: 'FormLeadP2',
                formpasso: 'Indisponivel'
            });
        }
    };
    MixPanelService.prototype.onAvailability = function (payload) {
        var d = {
            isEmptyResult: payload.isEmptyResult,
            speciality: payload.speciality.name,
            schedule_city: payload.locality.city,
            schedule_state: payload.locality.state,
            schedule_neighborhood: payload.locality.neighborhood
        };
        this.log.info('Result Available LP', d);
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Result Available LP', d);
            dataLayer.push({
                event: 'FormLeadP2',
                formpasso: 'Disponibilidade'
            });
        }
    };
    MixPanelService.prototype.removeUnecessaryFields = function (payload) {
        var name = payload.name, phone = payload.phone, email = payload.email, rest = __rest(payload, ["name", "phone", "email"]);
        return rest;
    };
    MixPanelService.prototype.setIndentifyUser = function (payload) {
        mixpanel.people.set({
            $name: payload.name,
            $phone: payload.phone,
            $email: payload.email,
            source: 'LP'
        });
        mixpanel.identify(payload.phone);
    };
    MixPanelService.prototype.onTimeSelected = function (payload) {
        payload = this.removeUnecessaryFields(payload);
        this.log.info('Time Requested', payload);
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Time Requested LP', payload);
            dataLayer.push({
                event: 'FormLeadP2',
                formpasso: 'Custo'
            });
        }
    };
    MixPanelService.prototype.onAvailabilitySelected = function (payload) {
        payload = this.removeUnecessaryFields(payload);
        this.log.info('Doctor Selected LP', payload);
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Doctor Selected LP', payload);
            dataLayer.push({
                event: 'FormLeadP3',
                formpasso: 'Confirmacao'
            });
        }
    };
    MixPanelService.prototype.onConfirmAppointment = function (payload) {
        payload = this.removeUnecessaryFields(payload);
        this.log.info('Confirm Clicked LP', payload);
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Confirm Clicked LP', payload);
            dataLayer.push({
                event: 'FormLeadP4',
                formpasso: 'SMS'
            });
        }
    };
    MixPanelService.prototype.onConfirmModalAppointment = function () {
        this.log.info('Confirm Final Clicked LP');
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Confirm Final Clicked LP');
        }
    };
    MixPanelService.prototype.onValidate = function (payload) {
        var obj = {
            time: payload.time ? payload.time._ : '',
            speciality: payload.speciality ? payload.speciality._ : '',
            city: payload.city ? payload.city._ : '',
            neighborhood: payload.neighborhood ? payload.neighborhood._ : '',
            state: payload.state ? payload.state._ : '',
            birthdate: payload.birthdate ? payload.birthdate._ : '',
            whoWillConsult: payload.whoWillConsult ? payload.whoWillConsult._ : '',
            workPlaceLat: payload.workPlaceLat ? payload.workPlaceLat._ : '',
            workPlaceLng: payload.workPlaceLng ? payload.workPlaceLng._ : '',
            stepNumber: payload.stepNumber ? payload.stepNumber._ : '',
            confirmationLink: payload.confirmationLink ? payload.confirmationLink._ : '',
            date: payload.date ? payload.date._ : '',
            link: payload.link ? payload.link._ : '',
            Timestamp: payload.Timestamp ? payload.Timestamp._ : ''
        };
        this.log.info('Link Validated', obj);
        this.log.info('Link Validated identifier', '+55' + payload.phone._);
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            mixpanel.identify('+55' + payload.phone._);
            this.track(payload.error ? 'Link Expired' : 'Link Validated', obj);
            dataLayer.push({
                event: 'FormLeadP6',
                formpasso: 'Validado'
            });
            fbq('track', 'Lead');
        }
    };
    MixPanelService.prototype.onValidateAutoConfirmation = function () {
        this.log.info('Link Validated with Auto-Confirmation');
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Link Validated with Auto-Confirmation');
            dataLayer.push({
                event: 'FormLeadP7',
                formpasso: 'ComAutoConfirmacao'
            });
        }
    };
    MixPanelService.prototype.onValidateNoAutoConfirmation = function () {
        this.log.info('Link Validated without Auto-Confirmation');
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Link Validated without Auto-Confirmation');
            dataLayer.push({
                event: 'FormLeadP7',
                formpasso: 'SemAutoConfirmacao'
            });
        }
    };
    MixPanelService.prototype.onUniqueUser = function (isUnique) {
        this.log.info('onUniqueUser');
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.track('Unique User Entered LP');
        }
    };
    MixPanelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MixPanelService);
    return MixPanelService;
}());



/***/ }),

/***/ "../../../../../src/app/services/schedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_doctorFields__ = __webpack_require__("../../../../../src/app/models/doctorFields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = (function () {
    function ScheduleService(apiService) {
        this.apiService = apiService;
    }
    ScheduleService.prototype.init = function () {
        this.searchResults = null;
    };
    ScheduleService.prototype.getAvailabilities = function (specialityID, lat, lng, date) {
        return this.apiService.getDoctors(new __WEBPACK_IMPORTED_MODULE_1__models_doctorFields__["a" /* DoctorFields */](specialityID, lat, lng, date));
    };
    ScheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], ScheduleService);
    return ScheduleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tracking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_service__ = __webpack_require__("../../../../../src/app/services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__azure_service__ = __webpack_require__("../../../../../src/app/services/azure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mix_panel_service__ = __webpack_require__("../../../../../src/app/services/mix-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackingService = (function () {
    function TrackingService(scheduleService, azureService, mixPanelService) {
        this.scheduleService = scheduleService;
        this.azureService = azureService;
        this.mixPanelService = mixPanelService;
        this.log = __WEBPACK_IMPORTED_MODULE_5_ng2_logger__["Log"].create('TrackingService');
    }
    // Evento disparado quando uma solicitação no formulário é preenchida
    TrackingService.prototype.onRequestAppointment = function (obj) {
        var _this = this;
        var payload = {
            latitude: obj.coordinates.lat,
            longitude: obj.coordinates.lng,
            name: obj.name + " " + obj.lastName,
            email: obj.email,
            speciality: obj.speciality.name,
            specialityID: obj.speciality.id,
            state: obj.locality.state,
            city: obj.locality.city,
            neighborhood: obj.locality.neighborhood,
            phone: obj.phone,
            databaseID: this.scheduleService.databaseID,
            stepLabel: 'onRequestAppointment',
            stepNumber: 0
        };
        this.log.info('onRequestAppointment', payload);
        return this.azureService.setRequestScheduler(payload)
            .map(function (data) {
            _this.mixPanelService.onRequestAppointment(payload);
            return _this.scheduleService.databaseID = data.id;
        });
    };
    // Evento disparado quando o resultado é vazio
    TrackingService.prototype.OnEmptyResult = function (obj) {
        this.log.info('OnEmptyResult', obj);
        obj.isEmptyResult = true;
        localStorage.setItem('user', JSON.stringify(obj));
        this.mixPanelService.OnEmptyResult(obj);
    };
    // On time Selected
    TrackingService.prototype.onTimeSelected = function (obj) {
        var _this = this;
        this.log.info('onTimeSelected', obj);
        var payload = {
            time: obj.schedule.availability.time,
            date: __WEBPACK_IMPORTED_MODULE_2_moment__(obj.schedule.date).format('DD/MM/YYYY'),
            databaseID: this.scheduleService.databaseID,
            stepLabel: 'onTimeSelected',
            stepNumber: 1
        };
        this.mixPanelService.onTimeSelected(payload);
        this.azureService.setRequestScheduler(payload).subscribe(function (data) {
            _this.scheduleService.databaseID = data.id;
        });
    };
    // Médico Selecionado
    TrackingService.prototype.onAvailabilitySelected = function (obj) {
        var _this = this;
        this.log.info('onAvailabilitySelected', obj);
        var add = obj.schedule.address;
        var payload = {
            price: obj.schedule.price_decimal,
            doctorID: obj.schedule.availability.doctor_id,
            workPlace: obj.schedule.name,
            avatar: obj.schedule.avatar.medium,
            workPlaceID: obj.schedule.availability.service_location_id,
            workPlaceAddress: add.address + ", " + add.number + " - " + (add.adjunct || '') + " - " + add.neighborhood.nome,
            workPlaceLat: add.latitude,
            workPlaceLng: add.longitude,
            workPlaceOrderOfArrival: obj.schedule.service_location_profile ? obj.schedule.service_location_profile.order_of_arrival : null,
            workPlaceAutoConfirmation: obj.schedule.autoConfirmation,
            scheduleTimestamp: obj.schedule.availability.timestamp,
            databaseID: this.scheduleService.databaseID,
            stepLabel: 'onAvailabilitySelected',
            stepNumber: 2
        };
        this.mixPanelService.onAvailabilitySelected(payload);
        this.azureService.setRequestScheduler(payload).subscribe(function (data) {
            _this.scheduleService.databaseID = data.id;
        });
    };
    TrackingService.prototype.onConfirmAppointment = function (obj) {
        this.log.info('onConfirmAppointment', obj);
        var add = obj.schedule.address;
        var payload = {
            latitude: obj.coordinates.lat,
            longitude: obj.coordinates.lng,
            email: obj.email,
            speciality: obj.speciality.name,
            specialityID: obj.speciality.id,
            state: obj.locality.state,
            city: obj.locality.city,
            neighborhood: obj.locality.neighborhood,
            phone: obj.phone,
            name: obj.name,
            birthdate: obj.birthdate,
            time: obj.schedule.availability.time,
            date: __WEBPACK_IMPORTED_MODULE_2_moment__(obj.schedule.date).format('DD/MM/YYYY'),
            databaseID: this.scheduleService.databaseID,
            price: obj.schedule.price_decimal,
            doctorID: obj.schedule.availability.doctor_id,
            workPlace: obj.schedule.name,
            avatar: obj.schedule.avatar.medium,
            workPlaceID: obj.schedule.availability.service_location_id,
            workPlaceAddress: add.address + ", " + add.number + " - " + (add.adjunct || '') + " - " + add.neighborhood.nome,
            workPlaceLat: add.latitude,
            workPlaceLng: add.longitude,
            workPlaceOrderOfArrival: obj.schedule.service_location_profile ? obj.schedule.service_location_profile.order_of_arrival : null,
            workPlaceAutoConfirmation: obj.schedule.autoConfirmation,
            scheduleTimestamp: obj.schedule.availability.timestamp,
            stepLabel: 'onConfirmAppointment',
            whoWillConsult: obj.who_will_consult,
            stepNumber: 3
        };
        this.mixPanelService.onConfirmAppointment(payload);
        return this.azureService.setRequestScheduler(payload);
    };
    TrackingService.prototype.onUniqueUser = function () {
        this.mixPanelService.onUniqueUser(true);
    };
    TrackingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_3__azure_service__["a" /* AzureService */],
            __WEBPACK_IMPORTED_MODULE_4__mix_panel_service__["a" /* MixPanelService */]])
    ], TrackingService);
    return TrackingService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/masks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Masks; });
var Masks = (function () {
    function Masks() {
    }
    Masks.phoneMask = function () {
        return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    };
    Masks.birthdateMask = function () {
        return [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    };
    return Masks;
}());



/***/ }),

/***/ "../../../../../src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.checkValidation = function (isValid, str, str2) {
        return isValid && str.localeCompare(str2) === 0;
    };
    Utils.formatWeekDay = function (date) {
        var i = date.indexOf('-');
        if (date && i > -1)
            return date.substring(0, i);
        return date;
    };
    Utils.simplifyString = function (str) {
        return this.removeAllWhiteSpace(this.removeDash(this.removeAccent(str.toLowerCase())));
    };
    Utils.removeAccent = function (inStr) {
        return inStr.replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g, function (str, a, c, e, i, n, o, s, u, y, ae) {
            if (a)
                return 'a';
            else if (c)
                return 'c';
            else if (e)
                return 'e';
            else if (i)
                return 'i';
            else if (n)
                return 'n';
            else if (o)
                return 'o';
            else if (s)
                return 's';
            else if (u)
                return 'u';
            else if (y)
                return 'y';
            else if (ae)
                return 'ae';
        });
    };
    Utils.removeDash = function (str) {
        return str.replace(/-/g, '');
    };
    Utils.removeAllWhiteSpace = function (str) {
        return str.replace(/\s/g, '');
    };
    return Utils;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    root: 'http://doutorjaapiform-homolog.azurewebsites.net',
    specialitiesJSON: 'specialities_homolog.json',
    api: {
        root: 'https://homolog.api.doutorja.com.br/api',
        appID: '00c12112ea30c325d9c818dcead9b1f4b21e8a92503a120000c660cd6e583f33',
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map