import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/core/models/models.component';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  @Input() datosComponent: CharacterInterface;
  
  constructor() { }

  ngOnInit(): void {
  }

}
