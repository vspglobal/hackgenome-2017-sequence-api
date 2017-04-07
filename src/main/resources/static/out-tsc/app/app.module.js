var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OauthService } from "./services/oauth/oauth.service";
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { ToastOptions, ToastModule } from 'ng2-toastr';
import { CustomOption } from "./app.toast";
import { appRoutes } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { ListDaoService } from "./list/list-dao.service";
import { HomeComponent } from './home/home.component';
import { BadgeComponent } from './home/badge/badge.component';
import { FilesComponent } from './files/files.component';
import { FileDaoService } from "./files/file-dao.service";
import { FutureComponent } from './future/future.component';
import { LoadingComponent } from './loading/loading.component';
import { ListServiceService } from "./list-service.service";
import { SuggestDaoService } from "./list/suggest-dao.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                HeaderComponent,
                ListComponent,
                HomeComponent,
                BadgeComponent,
                FilesComponent,
                FutureComponent,
                LoadingComponent
            ],
            imports: [
                BrowserModule,
                HttpModule,
                FormsModule,
                RouterModule.forRoot(appRoutes),
                ToastModule.forRoot(),
                BrowserAnimationsModule
            ],
            providers: [OauthService, { provide: ToastOptions, useClass: CustomOption }, ListDaoService, FileDaoService, ListServiceService, SuggestDaoService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/app.module.js.map