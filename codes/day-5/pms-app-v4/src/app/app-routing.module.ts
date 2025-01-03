import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ViewNotFoundComponent } from "./view-not-found/view-not-found.component";

const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: ViewNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}