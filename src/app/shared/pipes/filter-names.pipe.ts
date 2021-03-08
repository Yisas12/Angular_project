import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from '../../core/models/models.component';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(characterList: CharacterInterface[], searchTerm: string='') {
    /*if(!characterList || !searchTerm){
      return characterList;
    }*/

      /*return characterList.filter(character =>
      character.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);*/

    const lowerCaseFilter: string = searchTerm.toLowerCase().trim();

    const filteredList: CharacterInterface[] = characterList.filter((el: CharacterInterface) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}
