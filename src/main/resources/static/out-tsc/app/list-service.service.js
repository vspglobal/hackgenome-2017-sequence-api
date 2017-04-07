var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ListDaoService } from "./list/list-dao.service";
import { ToastsManager } from "ng2-toastr";
export var ListServiceService = (function () {
    function ListServiceService(listDao, toast) {
        this.listDao = listDao;
        this.toast = toast;
    }
    Object.defineProperty(ListServiceService.prototype, "list", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListServiceService.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            this._loading = value;
        },
        enumerable: true,
        configurable: true
    });
    ListServiceService.prototype.initList = function () {
        var _this = this;
        this.loading = true;
        this.listDao.fetch().subscribe(function (success) {
            _this.list = success;
            _this.loading = false;
        }, function (err) {
            _this.toast.error(err, "Error");
            _this.loading = false;
        });
    };
    ListServiceService.prototype.addItem = function (itemToAdd) {
        var _this = this;
        this.listDao.add(itemToAdd).subscribe(function (success) {
            _this.toast.success(itemToAdd + " added", "Success");
            _this.initList();
        }, function (err) {
            _this.toast.error(err, "Error");
        });
    };
    ListServiceService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ListDaoService, ToastsManager])
    ], ListServiceService);
    return ListServiceService;
}());
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/list-service.service.js.map