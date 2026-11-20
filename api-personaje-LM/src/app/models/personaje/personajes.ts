import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-personajes',
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})


export interface Personaje {
id: number;
name: string;
status: string;
species: string;
image: string;
}
export interface RespuestaPersonajes {
results: Personaje[];
}

