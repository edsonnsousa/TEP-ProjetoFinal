import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `

    <div style="text-align:center">
      <h1>
        Bem-vindo!
      </h1>
    </div>
    <div style="text-align:center">
      
      <h4>Usuário
        <img src="../assets/usuario.png">
      </h4>
      <input #username type='text' placeholder='Usuario'>
      <br/>
      <br/>
      <h4>Senha
        <img src="../assets/senha.png">
      </h4>
      <input #password type='password' placeholder='Senha'>
      <br/>
      <button (click)="login(username.value, password.value)">Entrar</button>
      <br/>
      <button><a routerLink='/signup'>Cadastre-se</a></button>
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
