import { Pipe, PipeTransform } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    const noimage: String = '../../assets/img/noimage.png';
    if (!imagenes) {
      return noimage;
    } else {
      if (imagenes.length > 0) {
        return imagenes[1].url;
      } else {
        return noimage;
      }
    }
  }
}
