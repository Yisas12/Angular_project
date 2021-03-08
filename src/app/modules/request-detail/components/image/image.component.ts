import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/core/models/models.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imageComponent: CharacterInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
