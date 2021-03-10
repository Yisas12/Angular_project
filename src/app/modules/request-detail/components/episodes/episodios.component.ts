import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  @Input() episodiosComponent: CharacterInterface;
  
  constructor() { }

  ngOnInit(): void {
  }

}
