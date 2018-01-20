import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino: String = '';

  constructor(public _spotify: SpotifyService) {}

  buscarArtista() {
    if (this.termino.length < 3) {
      // Que no haga nada si hay menos de 3 caracteres
      return;
    } else {
      this._spotify.getArtistas(this.termino)
    .subscribe();
    }
  }

}
