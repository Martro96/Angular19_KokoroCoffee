import { Component, OnInit } from '@angular/core';
import { CoffeeCardComponent } from "../coffee-card/coffee-card.component";
import { Observable } from "rxjs";
import { CommonModule } from '@angular/common';
import { Coffee  } from '../coffee-card/coffee-interfaz.component';
import { CoffeeService } from '../../services/services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule, CoffeeCardComponent],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent implements OnInit {
  coffees$!: Observable<Coffee[]>; 

  constructor(private coffeeService: CoffeeService) {
    this.coffees$ = this.coffeeService.getCoffees(); // Obtengo los datos de los cafés desde el servicio.
   }

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe(); //Creo un suscriptor para recibir los cambios en los datos de los cafés.
  }

  trackById(index: number, coffee: Coffee): number {
    return coffee.id; // Utilizo el id como identificador único para cada elemento de la lista.
  }

}
