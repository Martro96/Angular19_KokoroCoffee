import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage', 
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(imageUrl: string, fallbackUrl: string ='./assets/images/default-image.jpg'): string {
    return imageUrl || fallbackUrl;
  }

}
