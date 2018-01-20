import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
export class SpotifyService {
  artistas: any[];

  constructor(public http: HttpClient) {}


  getArtistas(artista: String) {
    const url = `https://api.spotify.com/v1/search?query=${artista}&type=artist&offset=0&limit=20`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCpK0h4Dd8dv__B4g5HeHVWdQhvTzpZYAqGbT-pumGZXCYFp-G6Cp_HKL1T-VnHfSkpCGTpXqaujRc4bNM'
    });
    return this.http.get(url, {headers})
          .map((resp: any)  => {
              // El map permite añadir logica antes de suscribirse al Obserbable
              this.artistas = resp.artists.items;
              return this.artistas;
          });
 }


}
