import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { FilesComponent } from "./files/files.component";
import { FutureComponent } from "./future/future.component";
export var appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'files', component: FilesComponent },
    { path: 'allergies', component: FutureComponent },
    { path: 'calories', component: FutureComponent },
    { path: 'settings', component: FutureComponent },
    {
        path: '**',
        redirectTo: '/home',
    },
];
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/app.routes.js.map