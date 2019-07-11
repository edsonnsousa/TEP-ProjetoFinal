import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `

<!--    <div class="login-page">-->
<!--      <div class="form">-->
<!--        <form class="register-form">-->
<!--          <input #username type='text' placeholder='Usuario1'/>-->
<!--          <input #password type='password' placeholder='Senha'/>-->
<!--          <input type="text" placeholder="email address"/>-->
<!--          <button>create</button>-->
<!--          <p class="message">Already registered? <a href="#">Sign In</a></p>-->
<!--        </form>-->
<!--        <form class="login-form">-->
<!--          <input #username type='text' placeholder='Usuario2'/>-->
<!--          <input #password type='password' placeholder='Senha'/>-->
<!--          <button (click)="login(username.value, password.value)">Entrar</button>-->
<!--          <p class="message">Not registered? <a href="#">Criar conta</a></p>-->
<!--          <p>{{ error?.message }}</p>-->
<!--          <p *ngIf="error">{{ error?.error | json }}</p>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
    
  <div style="text-align:center">
    <h1>
      Bem-vindo!
    </h1>
  </div>
  <div style="text-align:center">
    <input #username type='text' placeholder='Usuario'>
    <br/>
    <input #password type='password' placeholder='Senha'>
    <br/>
    <button (click)="login(username.value, password.value)">Entrar</button>
    <p>{{ error?.message }}</p>
    <p *ngIf="error">{{ error?.error | json }}</p>
  </div>
    
    
  `
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );
  }
}
