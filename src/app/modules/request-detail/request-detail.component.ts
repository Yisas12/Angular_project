import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../core/services/request.service';
import { CharacterInterface, CharacterResponseInterface } from '../../core/models/character.model';
import { RequestComponent } from '../request/request.component';
import { DatosComponent } from './components/data/datos.component';
import { EpisodiosComponent } from './components/episodes/episodios.component';
import { ImageComponent } from './components/image/image.component';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  userId: string;
  characterList: CharacterInterface[] = [];
  character: CharacterInterface = {
    id: 0,
    name: '',
    image: '',
    status: '',
    species: '',
    gender:'',
    episode: []
  };

  datosComponent: CharacterInterface={
    id: 0,
    name: '',
    image: '',
    status: '',
    species: '',
    gender: '',
    episode: []
  }

  episodiosComponent: CharacterInterface={
    id: 0,
    name: '',
    image: '',
    status: '',
    species: '',
    gender: '',
    episode: []
  }

  imageComponent: CharacterInterface={
    id: 0,
    name: '',
    image: '',
    status: '',
    species: '',
    gender: '',
    episode: []
  }

  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId');
    })

    this.requestService.getCharacter(this.userId).subscribe((data) => {

      this.character={
        id: data['id'],
        name: data['name'],
        image: data['image'],
        status: data['status'],
        species: data['species'],
        gender: data['gender'],
        episode: data['episode']
      }
      
      this.datosComponent={
        id: data['id'],
        name: data['name'],
        image: data['image'],
        status: data['status'],
        species: data['species'],
        gender: data['gender'],
        episode: data['episode']
      }

      this.episodiosComponent={
        id: data['id'],
        name: data['name'],
        image: data['image'],
        status: data['status'],
        species: data['species'],
        gender: data['gender'],
        episode: data['episode']
      }

      this.imageComponent={
        id: data['id'],
        name: data['name'],
        image: data['image'],
        status: data['status'],
        species: data['species'],
        gender: data['gender'],
        episode: data['episode']
      }
    })
  }
}
