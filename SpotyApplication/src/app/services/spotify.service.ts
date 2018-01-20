import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
export class SpotifyService {
  artistas: any[];

  urlSpotify: String = 'https://api.spotify.com/v1/';
  token: String = 'BQCL9NArG8OLJXDsBQ8_bVTyaNPTpIcK4clEzzvsO5WlxMy4ibjORkdHiBMbdoZV48C-RebkpL6EFJZw4pA';
  constructor(public http: HttpClient) {}


  getArtistas(artista: String) {
    const url = `${this.urlSpotify}search?query=${artista}&type=artist&offset=0&limit=20`;
    const headers = this.getHeader();
    return this.http.get(url, {headers})
          .map((resp: any)  => {
              // El map permite añadir logica antes de suscribirse al Obserbable
              this.artistas = resp.artists.items;
              return this.artistas;
          });
 }

  getArtista(id: String) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeader();
    return this.http.get(url, {headers});
  }

  getTopTracks(id: String) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    const headers = this.getHeader();
    return this.http.get(url, {headers});
  }

  /**
   * Genera el Header a partir del app token
   */
  private getHeader() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }
}
