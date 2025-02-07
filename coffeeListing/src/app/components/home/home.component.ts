import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from "../coffee-list/coffee-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CoffeeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
