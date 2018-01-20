import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
export class SpotifyService {
  artistas: any[];

  urlSpotify: String = 'https://api.spotify.com/v1/';
  token: String = 'BQDvOsBwiypavJ22W_4FnPV8mCBY6NpFKar9Aa9Nbil5lhQJkl-T6_ievVGdVKv9goulQl2pcHxtXwS65mY';
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

  /**
  * Llamada a Spotify API para obtener info del artista 
  * @param id Id del artista
  */
  getArtista(id: String) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeader();
    return this.http.get(url, {headers});
  }

  /**
   * Llamada a la API de Spotify para recuperar los top tracks del artista
   * @param id Id del artista
   */
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
