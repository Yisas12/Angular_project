import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//endpoint sobre el que atacaremos
const baseURL = 'https://rickandmortyapi.com/api/';

//petición character
const characterURL = baseURL + 'character/';

//const characterInfo = characterURL + idCharacter;

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  //idCharacter: Number;
  constructor(private http: HttpClient) {
   // this.idCharacter=0;
   }

  getCharacters(){
    return this.http.get(characterURL);
  }

  getCharacter(idCharacter: string){
    return this.http.get(characterURL + idCharacter);
  }
}
