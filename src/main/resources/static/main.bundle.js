webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dao; });
var Dao = (function () {
    function Dao() {
        this.base = 'http://localhost:8080';
        var location = window.location.href;
        if (/localhost/.test(location)) {
            this.base = 'http://localhost:8080';
        }
        else {
            this.base = "";
        }
    }
    Dao.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return Dao;
}());

//# sourceMappingURL=C:/workspace/sequence-ui/src/app.dao.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dao__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDaoService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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



var FileDaoService = (function (_super) {
    __extends(FileDaoService, _super);
    function FileDaoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.path = '/files';
        return _this;
    }
    FileDaoService.prototype.getFiles = function () {
        return this.http.get(this.base + this.path).map(this.extractData);
    };
    FileDaoService.prototype.selectFile = function (id) {
        return this.http.post(this.base + this.path, { id: id }).map(this.extractData);
    };
    return FileDaoService;
}(__WEBPACK_IMPORTED_MODULE_1__app_dao__["a" /* Dao */]));
FileDaoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FileDaoService);

var _a;
//# sourceMappingURL=C:/workspace/sequence-ui/src/file-dao.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_dao_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilesComponent = (function () {
    function FilesComponent(fileDao, toast, router) {
        this.fileDao = fileDao;
        this.toast = toast;
        this.router = router;
        this.files = [];
        this.initDao();
    }
    FilesComponent.prototype.ngOnInit = function () {
    };
    FilesComponent.prototype.selectFile = function (file) {
        var _this = this;
        this.fileDao.selectFile(file.id).subscribe(function (success) {
            _this.router.navigate(['home']);
        }, function (err) {
            _this.toast.error(err, "Error");
        });
    };
    FilesComponent.prototype.initDao = function () {
        var _this = this;
        this.fileDao.getFiles().subscribe(function (success) {
            _this.files = success;
            _this.toast.success("Files Retrieved", "Success");
        }, function (err) {
            _this.toast.error(err, "Error");
        });
    };
    return FilesComponent;
}());
FilesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-files',
        template: __webpack_require__(387),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_dao_service__["a" /* FileDaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__file_dao_service__["a" /* FileDaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], FilesComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/workspace/sequence-ui/src/files.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FutureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FutureComponent = (function () {
    function FutureComponent() {
    }
    FutureComponent.prototype.ngOnInit = function () {
    };
    return FutureComponent;
}());
FutureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-future',
        template: __webpack_require__(388),
        styles: [__webpack_require__(377)]
    }),
    __metadata("design:paramtypes", [])
], FutureComponent);

//# sourceMappingURL=C:/workspace/sequence-ui/src/future.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = HeaderComponent_1 = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.backEnabled = function () {
        return HeaderComponent_1.enableBack;
    };
    return HeaderComponent;
}());
HeaderComponent.enableBack = false;
HeaderComponent = HeaderComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(389),
        styles: [__webpack_require__(378)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

var HeaderComponent_1;
//# sourceMappingURL=C:/workspace/sequence-ui/src/header.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */].enableBack = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goTo = function (str) {
        __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */].enableBack = true;
        this.router.navigate([str]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(391),
        styles: [__webpack_require__(380)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/workspace/sequence-ui/src/home.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dao__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDaoService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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



var ListDaoService = (function (_super) {
    __extends(ListDaoService, _super);
    function ListDaoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.path = "/list";
        return _this;
    }
    ListDaoService.prototype.fetch = function () {
        return this.http.get(this.base + this.path).map(this.extractData);
    };
    ListDaoService.prototype.add = function (item) {
        return this.http.post(this.base + this.path, { name: item }).map(this.extractData);
    };
    return ListDaoService;
}(__WEBPACK_IMPORTED_MODULE_1__app_dao__["a" /* Dao */]));
ListDaoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ListDaoService);

var _a;
//# sourceMappingURL=C:/workspace/sequence-ui/src/list-dao.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_dao_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(listDao, toast, router) {
        var _this = this;
        this.listDao = listDao;
        this.toast = toast;
        this.router = router;
        this.list = [];
        this.loading = true;
        this.addLoading = false;
        this.itemToAdd = "";
        listDao.fetch().subscribe(function (success) {
            _this.toast.success("Retrieved Current Shopping List", "Success");
            _this.list = success;
            _this.loading = false;
        }, function (err) {
            _this.toast.error(err, "Error");
            _this.loading = false;
        });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.addItem = function () {
        var _this = this;
        if (this.addLoading) {
            return;
        }
        this.addLoading = true;
        this.listDao.add(this.itemToAdd).subscribe(function (success) {
            _this.toast.success(_this.itemToAdd + " added", "Success");
            _this.listDao.fetch().subscribe(function (success) {
                _this.list = success;
                _this.addLoading = false;
            }, function (err) {
                _this.addLoading = false;
            });
        }, function (err) {
            _this.toast.error(err, "Error");
            _this.addLoading = false;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(392),
        styles: [__webpack_require__(381)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__list_dao_service__["a" /* ListDaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__list_dao_service__["a" /* ListDaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/workspace/sequence-ui/src/list.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginWithSequence = function () {
        window.location.href =
            "https://sequencing.com/oauth2/authorize?redirect_uri=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].redirect_uri + "&response_type=code&state=WA&client_id=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].client_id + "&scope=demo";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(394),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=C:/workspace/sequence-ui/src/login.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OauthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OauthService = (function () {
    function OauthService() {
        this.loggedIn = false;
    }
    OauthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    OauthService.prototype.setCode = function (code) {
        if (code != null && code.length > 0) {
            this.loggedIn = true;
            this._code = code;
        }
    };
    Object.defineProperty(OauthService.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    return OauthService;
}());
OauthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], OauthService);

//# sourceMappingURL=C:/workspace/sequence-ui/src/oauth.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    redirect_uri: 'http://40.71.86.58',
    client_id: 'HackGenome2'
};
//# sourceMappingURL=C:/workspace/sequence-ui/src/environment.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 206;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(217);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/workspace/sequence-ui/src/main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_oauth_oauth_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(activatedRoute, oauth, router, http, toastr, vcr) {
        this.activatedRoute = activatedRoute;
        this.oauth = oauth;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loading = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.getParameterByName("code")) {
            var code = this.getParameterByName("code");
            this.loading = true;
            this.http.get("http://localhost:8080/user?code=" + code + "&state=" + this.getParameterByName("state")).map(this.extract).subscribe(function (success) {
                _this.oauth.setCode(success);
                _this.loading = false;
                _this.router.navigate(["home"]);
                _this.toastr.success("Logged In", "Successfully Logged In Through Sequence");
            }, function (err) {
                console.log(err);
            });
        }
        else if (!this.oauth.isLoggedIn()) {
            this.router.navigate(["login"]);
        }
    };
    AppComponent.prototype.getParameterByName = function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    AppComponent.prototype.extract = function (data) {
        return data._body;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(386),
        styles: [__webpack_require__(375)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_oauth_oauth_service__["a" /* OauthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_oauth_oauth_service__["a" /* OauthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/workspace/sequence-ui/src/app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_oauth_oauth_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_toast__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_list_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_list_dao_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_badge_badge_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__files_files_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__files_file_dao_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__future_future_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__loading_loading_component__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_badge_badge_component__["a" /* BadgeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__files_files_component__["a" /* FilesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__future_future_component__["a" /* FutureComponent */],
            __WEBPACK_IMPORTED_MODULE_20__loading_loading_component__["a" /* LoadingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_oauth_oauth_service__["a" /* OauthService */], { provide: __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_10__app_toast__["a" /* CustomOption */] }, __WEBPACK_IMPORTED_MODULE_14__list_list_dao_service__["a" /* ListDaoService */], __WEBPACK_IMPORTED_MODULE_18__files_file_dao_service__["a" /* FileDaoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/workspace/sequence-ui/src/app.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__files_files_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__future_future_component__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });





var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* ListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'files', component: __WEBPACK_IMPORTED_MODULE_3__files_files_component__["a" /* FilesComponent */] },
    { path: 'allergies', component: __WEBPACK_IMPORTED_MODULE_4__future_future_component__["a" /* FutureComponent */] },
    { path: 'calories', component: __WEBPACK_IMPORTED_MODULE_4__future_future_component__["a" /* FutureComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__future_future_component__["a" /* FutureComponent */] },
    {
        path: '**',
        redirectTo: '/home',
    },
];
//# sourceMappingURL=C:/workspace/sequence-ui/src/app.routes.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positionClass = "toast-bottom-center";
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=C:/workspace/sequence-ui/src/app.toast.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeComponent = (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    return BadgeComponent;
}());
BadgeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-badge',
        template: __webpack_require__(390),
        styles: [__webpack_require__(379)],
        inputs: ['color', 'icon', 'text']
    }),
    __metadata("design:paramtypes", [])
], BadgeComponent);

//# sourceMappingURL=C:/workspace/sequence-ui/src/badge.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__(393),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=C:/workspace/sequence-ui/src/loading.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".app {\n  background-color: white;\n  /*\r\n  background-image: url(\"../assets/tree.png\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".header {\n  background-color: #2e8bcc;\n  height: 50px; }\n\n.title {\n  color: #ecf0f1;\n  font-size: 30px;\n  margin-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".icon-badge, .icon-badge-green, .icon-badge-purple, .icon-badge-pink, .icon-badge-red, .icon-badge-yellow, .icon-badge-teal {\n  height: 100px;\n  padding-top: 15px; }\n\n.icon-badge-green {\n  background-color: #8cbf26; }\n\n.icon-badge-purple {\n  background-color: #7b4f9d; }\n\n.icon-badge-pink {\n  background-color: #ff0097; }\n\n.icon-badge-red {\n  background-color: #c0392b; }\n\n.icon-badge-yellow {\n  background-color: #f1c40f; }\n\n.icon-badge-teal {\n  background-color: #00aba9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".icon-badge, .icon-badge-green, .icon-badge-purple {\n  height: 100px;\n  padding-top: 15px; }\n\n.icon-badge-green {\n  background-color: #8cbf26; }\n\n.icon-badge-purple {\n  background-color: #7b4f9d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".list {\n  background-color: #2e8bcc;\n  opacity: .8;\n  border: 1px solid #7b4f9d;\n  margin: 30px; }\n\n.strike {\n  text-decoration: line-through; }\n\n.warning {\n  display: block;\n  color: orangered;\n  font-size: 10px; }\n\n.contain {\n  position: relative;\n  margin: 155px auto;\n  width: 200px; }\n\nsvg {\n  position: absolute; }\n  svg ellipse {\n    -webkit-transform-origin: center;\n            transform-origin: center; }\n  svg:nth-of-type(1) ellipse {\n    stroke: #F1725D;\n    cx: 25px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n  svg:nth-of-type(2) ellipse {\n    stroke: #38BDAB;\n    cx: 65px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 75ms;\n            animation-delay: 75ms; }\n  svg:nth-of-type(3) ellipse {\n    stroke: #9D30A5;\n    cx: 105px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 150ms;\n            animation-delay: 150ms; }\n  svg:nth-of-type(4) ellipse {\n    stroke: #B779E2;\n    cx: 145px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 225ms;\n            animation-delay: 225ms; }\n  svg:nth-of-type(5) ellipse {\n    stroke: #683893;\n    cx: 185px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 300ms;\n            animation-delay: 300ms; }\n  svg:nth-of-type(6) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 25px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n  svg:nth-of-type(7) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 65px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 75ms;\n            animation-delay: 75ms; }\n  svg:nth-of-type(8) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 105px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 150ms;\n            animation-delay: 150ms; }\n  svg:nth-of-type(9) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 145px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 225ms;\n            animation-delay: 225ms; }\n  svg:nth-of-type(10) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 185px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 300ms;\n            animation-delay: 300ms; }\n\n@-webkit-keyframes jump {\n  40% {\n    -webkit-transform: translateY(20px) scale(1.3);\n            transform: translateY(20px) scale(1.3);\n    opacity: .9; }\n  40% {\n    rx: 10px;\n    ry: 10px;\n    stroke-width: 3px; }\n  45% {\n    rx: 15px;\n    ry: 7px;\n    stroke-width: 4px; }\n  55% {\n    rx: 10px;\n    ry: 10px; } }\n\n@keyframes jump {\n  40% {\n    -webkit-transform: translateY(20px) scale(1.3);\n            transform: translateY(20px) scale(1.3);\n    opacity: .9; }\n  40% {\n    rx: 10px;\n    ry: 10px;\n    stroke-width: 3px; }\n  45% {\n    rx: 15px;\n    ry: 7px;\n    stroke-width: 4px; }\n  55% {\n    rx: 10px;\n    ry: 10px; } }\n\n@-webkit-keyframes shadow {\n  45% {\n    opacity: .15;\n    rx: 10px;\n    ry: 3px;\n    -webkit-transform: translateY(5px) scale(1.3);\n            transform: translateY(5px) scale(1.3); } }\n\n@keyframes shadow {\n  45% {\n    opacity: .15;\n    rx: 10px;\n    ry: 3px;\n    -webkit-transform: translateY(5px) scale(1.3);\n            transform: translateY(5px) scale(1.3); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".contain {\n  position: relative;\n  margin: 155px auto;\n  width: 200px; }\n\nsvg {\n  position: absolute; }\n  svg ellipse {\n    -webkit-transform-origin: center;\n            transform-origin: center; }\n  svg:nth-of-type(1) ellipse {\n    stroke: #F1725D;\n    cx: 25px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n  svg:nth-of-type(2) ellipse {\n    stroke: #38BDAB;\n    cx: 65px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 75ms;\n            animation-delay: 75ms; }\n  svg:nth-of-type(3) ellipse {\n    stroke: #9D30A5;\n    cx: 105px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 150ms;\n            animation-delay: 150ms; }\n  svg:nth-of-type(4) ellipse {\n    stroke: #B779E2;\n    cx: 145px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 225ms;\n            animation-delay: 225ms; }\n  svg:nth-of-type(5) ellipse {\n    stroke: #683893;\n    cx: 185px;\n    stroke-width: 3px;\n    -webkit-animation: jump 600ms infinite ease-in-out;\n            animation: jump 600ms infinite ease-in-out;\n    opacity: .7;\n    -webkit-animation-delay: 300ms;\n            animation-delay: 300ms; }\n  svg:nth-of-type(6) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 25px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n  svg:nth-of-type(7) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 65px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 75ms;\n            animation-delay: 75ms; }\n  svg:nth-of-type(8) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 105px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 150ms;\n            animation-delay: 150ms; }\n  svg:nth-of-type(9) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 145px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 225ms;\n            animation-delay: 225ms; }\n  svg:nth-of-type(10) ellipse {\n    fill: #333333;\n    opacity: .05;\n    rx: 0;\n    ry: 0;\n    cx: 185px;\n    cy: 48px;\n    -webkit-animation: shadow 600ms infinite ease-in-out;\n            animation: shadow 600ms infinite ease-in-out;\n    -webkit-animation-delay: 300ms;\n            animation-delay: 300ms; }\n\n@-webkit-keyframes jump {\n  40% {\n    -webkit-transform: translateY(20px) scale(1.3);\n            transform: translateY(20px) scale(1.3);\n    opacity: .9; }\n  40% {\n    rx: 10px;\n    ry: 10px;\n    stroke-width: 3px; }\n  45% {\n    rx: 15px;\n    ry: 7px;\n    stroke-width: 4px; }\n  55% {\n    rx: 10px;\n    ry: 10px; } }\n\n@keyframes jump {\n  40% {\n    -webkit-transform: translateY(20px) scale(1.3);\n            transform: translateY(20px) scale(1.3);\n    opacity: .9; }\n  40% {\n    rx: 10px;\n    ry: 10px;\n    stroke-width: 3px; }\n  45% {\n    rx: 15px;\n    ry: 7px;\n    stroke-width: 4px; }\n  55% {\n    rx: 10px;\n    ry: 10px; } }\n\n@-webkit-keyframes shadow {\n  45% {\n    opacity: .15;\n    rx: 10px;\n    ry: 3px;\n    -webkit-transform: translateY(5px) scale(1.3);\n            transform: translateY(5px) scale(1.3); } }\n\n@keyframes shadow {\n  45% {\n    opacity: .15;\n    rx: 10px;\n    ry: 3px;\n    -webkit-transform: translateY(5px) scale(1.3);\n            transform: translateY(5px) scale(1.3); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".loginCard {\n  background-color: #8cbf26;\n  margin-top: 100px;\n  border: 2px solid #7b4f9d;\n  color: #8cbf26; }\n\n.loginCardHeader {\n  background-color: #393; }\n\n.icon {\n  width: 20px;\n  height: 20px; }\n\n.smallNavHolder {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.navBtn {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" style=\"min-height: 100vh\">\n  <app-header></app-header>\n  <div *ngIf=\"loading\">\n      <app-loading></app-loading>\n  </div>\n  <div [hidden]=\"loading\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\" *ngFor=\"let file of files\">\n      <app-badge style=\"cursor: pointer\" class=\"col-12 pad-top\" [text]=\"file.friendlyDesc1\" icon=\"person\" [color]=\"file.selected ? 'red' : 'green'\" (click)=\"selectFile(file)\"></app-badge>\n    </div>\n  </div>\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding:0px;\">\n  <img src=\"../../assets/future.png\" style=\"max-width: 100%; max-height: 100%\"/>\n</div>\n"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\r\n  <div class=\"row\">\r\n    <div class=\"title col-8\" [routerLink]=\"['home']\" style=\"font-weight: bold\">SmartList</div>\r\n    <div class=\"col-4\">\r\n        <button class=\"btn btn-block btn-warning\" style=\"margin-top:5px;\" *ngIf=\"backEnabled()\" [routerLink]=\"'home'\">Back</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid justify-content-center text-center\" [ngClass]=\"'icon-badge-' + color\">\n  <div class=\"row\">\n    <div class=\"col\"><img [src]=\"'../../../assets/svg/' + icon + '.svg'\" style=\"height:50px; width:50px;\"/></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      {{text}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <app-badge class=\"col-12 col-md-12 pad-top\" color=\"green\" icon=\"list-ordered\" text=\"List\" (click)=\"goTo('list')\"></app-badge>\n    <app-badge class=\"col-sm-8 col-md-7 pad-top\" color=\"red\" icon=\"dashboard\" text=\"Calories\" (click)=\"goTo('calories')\"></app-badge>\n    <app-badge class=\"col-sm-4 col-md-5 pad-top\" color=\"pink\" icon=\"octoface\" text=\"Allergies\" (click)=\"goTo('allergies')\"></app-badge>\n    <app-badge class=\"col-sm-6 col-md-6 pad-top\" color=\"yellow\" icon=\"person\" text=\"Seq Files\" (click)=\"goTo('files')\"></app-badge>\n    <app-badge class=\"col-sm-6 col-md-6 pad-top\" color=\"teal\" icon=\"gear\" text=\"Settings\" (click)=\"goTo('settings')\"></app-badge>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div>\n\n    <div class=\"card\" style=\"border:none; border-radius: 0px;\">\n      <img class=\"card-img-top\" src=\"../../../assets/market.jpg\" alt=\"Card image cap\"\n           style=\"max-height: 100%; max-width: 100%\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Shopping Cart</h4>\n        <input class=\"form-control\" [(ngModel)]=\"itemToAdd\" style=\"margin-bottom : 5px;\">\n        <button class=\"btn btn-success btn-block\" (click)=\"addItem()\"><app-loading *ngIf=\"!!addLoading\"></app-loading>\n          <div *ngIf=\"!addLoading\">Add Item</div></button>\n      </div>\n      <ul class=\"list-group list-group-flush\" *ngIf=\"!loading\">\n        <li class=\"list-group-item\" [ngClass]=\"{'strike' : !!item.strike}\" *ngFor=\"let item of list\"\n            (click)=\"item.strike = !item.strike\">\n          <div class=\"container-fluid no-gutters\" style=\"padding:0px;\">\n            <div class=\"row\">\n              <div class=\"col-12\">{{item.name}}</div>\n            </div>\n            <div class=\"row warning\" *ngIf=\"!!item.warning\">\n              <div class=\"col-12\">{{item.warning}}</div>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <ul *ngIf=\"!!loading\">\n        <app-loading></app-loading>\n      </ul>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div class='contain'>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n  <svg height='80' width='210'>\n    <ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>\n  </svg>\n</div>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row justify-content-center hidden-lg-up smallNavHolder\">\r\n    <button class=\"form-control navBtn\" style=\"margin-top:10px;\" (click)=\"loginWithSequence()\">Sequence</button>\r\n    <button class=\"form-control navBtn\" style=\"margin-top:10px;\"><img src=\"../../assets/gicon.png\" class=\"icon\">\r\n    </button>\r\n    <button class=\"form-control navBtn\" style=\"margin-top:10px;\"><img src=\"../../assets/ficon.png\" class=\"icon\">\r\n    </button>\r\n  </div>\r\n  <div class=\"row justify-content-center hidden-md-down\">\r\n    <div class=\"col-4\">\r\n      <div class=\"card text-center loginCard\">\r\n        <div class=\"card-header loginCardHeader\">\r\n          Login\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <button class=\"form-control navBtn\" style=\"margin-top:10px;\" (click)=\"loginWithSequence()\">Sequence</button>\r\n          <button class=\"form-control navBtn\" style=\"margin-top:10px;\"><img src=\"../../assets/gicon.png\" class=\"icon\">\r\n          </button>\r\n          <button class=\"form-control navBtn\" style=\"margin-top:10px;\"><img src=\"../../assets/ficon.png\" class=\"icon\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);


/***/ })

},[658]);
//# sourceMappingURL=main.bundle.js.map