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
import { Injectable } from '@angular/core';
import { Dao } from "../app.dao";
import { Http } from "@angular/http";
export var FileDaoService = (function (_super) {
    __extends(FileDaoService, _super);
    function FileDaoService(http) {
        _super.call(this);
        this.http = http;
        this.path = '/files';
    }
    FileDaoService.prototype.getFiles = function () {
        return this.http.get(this.base + this.path).map(this.extractData);
    };
    FileDaoService.prototype.selectFile = function (id) {
        return this.http.post(this.base + this.path, { id: id }).map(this.extractData);
    };
    FileDaoService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], FileDaoService);
    return FileDaoService;
}(Dao));
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/files/file-dao.service.js.map