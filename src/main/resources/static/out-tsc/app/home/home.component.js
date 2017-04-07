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
import { Router } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { ListServiceService } from "../list-service.service";
export var HomeComponent = (function () {
    function HomeComponent(router, listService) {
        this.router = router;
        this.listService = listService;
        HeaderComponent.enableBack = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.listService.initList();
    };
    HomeComponent.prototype.goTo = function (str) {
        HeaderComponent.enableBack = true;
        this.router.navigate([str]);
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }), 
        __metadata('design:paramtypes', [Router, ListServiceService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/home/home.component.js.map