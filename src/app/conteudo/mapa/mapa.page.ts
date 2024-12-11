import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare let google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: any;
  lat: number = 0;
  lng: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Verifica e converte as coordenadas para número
    this.route.params.subscribe(params => {
      this.lat = parseFloat(params['lat']); // Converte para número
      this.lng = parseFloat(params['lng']); // Converte para número

      if (!isNaN(this.lat) && !isNaN(this.lng)) {
        this.loadMap();
      } else {
        console.error('Coordenadas inválidas:', this.lat, this.lng);
      }
    });
  }

  loadMap() {
    const mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 15,
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adiciona o marcador no mapa
    new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      map: this.map,
      title: 'Localização selecionada',
    });
  }
}

