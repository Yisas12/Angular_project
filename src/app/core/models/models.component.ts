import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface CharacterInterface{
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  episode: string[];
}

export interface CharacterResponseInterface{
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: CharacterInterface[];
}
