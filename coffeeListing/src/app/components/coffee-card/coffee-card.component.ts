import { Component, Input } from '@angular/core';
import { Coffee  } from './coffee-interfaz.component';
import { CommonModule, NgClass } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule, NgClass, DefaultImagePipe],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css'
})
export class CoffeeCardComponent {
  @Input() coffe!: Coffee; 


  constructor(private router: Router) {}

  navigateToDetail(): void {
    this.router.navigate(['/coffe/detail', this.coffe.id]);
  }

}
