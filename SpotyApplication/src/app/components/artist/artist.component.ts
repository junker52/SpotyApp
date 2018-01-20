import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
    // Se dispara cuando el componente esta inicializado
    // Devuelve un JSON con los parametros de la ruta
    this.activatedRoute.params
      .map( params => params['id'])
      .subscribe(parametros => {
          console.log(parametros);
      });
  }

}
