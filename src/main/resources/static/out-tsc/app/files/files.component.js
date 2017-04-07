var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FileDaoService } from "./file-dao.service";
import { ToastsManager } from "ng2-toastr";
import { Router } from "@angular/router";
export var FilesComponent = (function () {
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
    FilesComponent = __decorate([
        Component({
            selector: 'app-files',
            templateUrl: './files.component.html',
            styleUrls: ['./files.component.scss']
        }), 
        __metadata('design:paramtypes', [FileDaoService, ToastsManager, Router])
    ], FilesComponent);
    return FilesComponent;
}());
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/files/files.component.js.map