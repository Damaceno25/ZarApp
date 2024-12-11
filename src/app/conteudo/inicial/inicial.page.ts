import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage {
  constructor(private router: Router) {}

  goToPraias() {
    this.router.navigate(['conteudo/inicial/praias']);
  }

  goToPontosTuristicos() {
    this.router.navigate(['conteudo/inicial/turisticos']);
  }

  goToCachoeiras() {
    this.router.navigate(['conteudo/inicial/cachoeiras']);
  }

  goToTrilhas() {
    this.router.navigate(['conteudo/inicial/trilhas']);
  }
  goToDetails() {
    this.router.navigate(['conteudo/inicial/detalhes']);
  }
}
