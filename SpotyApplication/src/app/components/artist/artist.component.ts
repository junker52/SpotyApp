import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  id: String;
  artista: any;
  tracks: any[];

  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) {
  }

  // Se dispara cuando el componente esta inicializado
  ngOnInit() {
    this.getIdAndFillArtistas();
    this.getAndFillTopTrack();
  }

  private getIdAndFillArtistas() {
    // Devuelve un JSON con los parametros de la ruta
    this.activatedRoute.params
      .map(params => {
        this.id = params['id'];
        return this.id;
      })
      .subscribe(id => {
        // Primer suscribe para escuchar la llegada del parametro por URL
        console.log(id);
        this._spotify.getArtista(id)
          .subscribe(artista => {
            // Segundo suscribe para escuchar la resupesta de Spotify.
            console.log(artista);
            this.artista = artista;
          });
      });
  }

  private getAndFillTopTrack() {
    this._spotify.getTopTracks(this.id)
      .map((resp: any) => {
        this.tracks = resp.tracks;
        return this.tracks;
      })
      .subscribe(params => {
        console.log(params);
      });

    console.log(this.artista);
    console.log(this.tracks);
  }
}
