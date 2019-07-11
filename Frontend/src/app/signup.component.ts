import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  template: `
  <div style="text-align:center">
    <h1>
      Cadastre-se
    </h1>
  </div>
  <div style="text-align:center">
  <input #username type='text' placeholder='Usuario'><br/>
  <input #email type='text' placeholder='Email'><br/>
  <input #password1 type='password' placeholder='Senha'><br/>
  <input #password2 type='password' placeholder='Repetir senha'><br/>
  <button (click)="signup(username.value, email.value, password1.value, password2.value)">Cadastrar</button>
  <p>{{ error?.message }}</p>
  <p *ngIf="error">{{ error?.error | json }}</p>
  </div>
  `
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string) {
    this.authService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );
  }
}
