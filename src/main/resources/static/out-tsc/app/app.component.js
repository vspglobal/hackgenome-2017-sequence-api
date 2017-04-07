var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from '@angular/core';
import { OauthService } from "./services/oauth/oauth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { ToastsManager } from "ng2-toastr";
import { environment } from "../environments/environment";
export var AppComponent = (function () {
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
            this.http.get(environment.base + "/user?code=" + code + "&state=" + this.getParameterByName("state")).map(this.extract).subscribe(function (success) {
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
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, OauthService, Router, Http, ToastsManager, ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/app.component.js.map