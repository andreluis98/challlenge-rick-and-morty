import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  showGoUpButton: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.getCharactersDetails();
  }

  getCharactersDetails() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.rickAndMortyService.getCharacter(id).subscribe((data) => {
        this.character = data;
      });
    });
  }
}
