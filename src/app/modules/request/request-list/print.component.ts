import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/core/models/models.component';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  @Input() printComponent: CharacterInterface[];
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
