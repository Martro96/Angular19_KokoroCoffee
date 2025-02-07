import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Importamos HttpClientModule para recoger la información de la API
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  //URL de la API que proporciona los datos de los cafés
  private apiUrl = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

  //Añadimos el constructor con HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  //Creo el método para recoger los datos de la API de los cafés
  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
