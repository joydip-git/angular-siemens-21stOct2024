import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../services/tonen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  // username = new FormControl('enter username')
  // password = new FormControl('enter password')

  // submit(e: Event) {
  //   e.preventDefault()
  //   console.log(this.username.value);
  //   console.log(this.password.value);
  // }

  // loginFrm = new FormGroup(
  //  {
  //     username: new FormControl('enter username'),
  //     password: new FormControl('enter password')
  //  }
  // )
  loginFrm: FormGroup;
  private authSub?: Subscription;

  constructor(
    private builder: FormBuilder,
    private authSvc: AuthService,
    private tokenSvc: TokenService,
    private router: Router
  ) {
    this.loginFrm = this.builder.group({
      username: ['enter username'],
      password: ['enter password']
    })
  }
  ngOnDestroy(): void {
    this.authSub?.unsubscribe()
  }

  submit() {
    // console.log(this.loginFrm.get('username')?.value);
    // console.log(this.loginFrm.get('password')?.value);
    console.log(this.loginFrm.value);
    this.authSub = this.authSvc
      .login(<User>this.loginFrm.value)
      .subscribe({
        next: (respone) => {
          //console.log(respone.data);
          if (respone.data !== null) {
            this.tokenSvc.saveToken(respone.data)
          } else
            alert('not a valid user')
        },
        error: (e) => { },
        complete: () => {
          this.router.navigate(['/products'])
        }
      })
  }
}
