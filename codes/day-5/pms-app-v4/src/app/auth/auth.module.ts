import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

const authRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    provideHttpClient()
  ]
})
export class AuthModule {

}