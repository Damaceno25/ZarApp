import { Component } from '@angular/core';
import { AutenticacaoService } from "../../services/autenticacao.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  {

  constructor(
    private autenticacaoService : AutenticacaoService,
    private router: Router
  ) {}

  // Método para realizar o logout
  logout() {
    this.autenticacaoService.limparSessao(); // Limpa a sessão
    this.router.navigate(['/login']); // Navega para a página de login
  }

  
}
