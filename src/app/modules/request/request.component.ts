import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../../core/models/character.model';
import { RequestService } from '../../core/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  //declaramos variable donde almacenamos el resultado
  characterList: CharacterInterface[] = [];
  searchTerm: string = '';
  

  //llamamos al servicio o inicializamos servicio
  constructor(private requestService: RequestService) {   }

  //al arrancar la app
  ngOnInit(): void {

    //getCharacter para guardar resultados
    this.requestService.getCharacters().subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;

      const formattedResults = results.map(({id, name, image, status, species, gender,episode}) => ({
        id,
        name,
        image,
        status,
        species,
        gender,
        episode
      }));
      this.characterList = formattedResults;
    })
  }

  getCharacterList(){
    return this.characterList;
  }
}
