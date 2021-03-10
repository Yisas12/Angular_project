import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/core/models/character.model';
import { FilterNamesPipe } from 'src/app/shared/pipes/filter-names.pipe';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  @Input() printComponent: CharacterInterface[];

  constructor(private filterNamesPipe: FilterNamesPipe) { }

 // private charactersDefault: CharacterInterface[];
  public characters: CharacterInterface[];

  ngOnInit(): void {

    this.characters=this.printComponent;
  }

  public handleFilter(value) : void{
    if(value){
      this.characters = this.filterNamesPipe.transform(this.printComponent, value);
    }
    else{
      this.characters=this.printComponent;
    }
  }
}
