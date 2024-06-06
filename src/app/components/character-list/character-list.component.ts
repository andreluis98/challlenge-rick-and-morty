import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  searchTerm: string = '';
  private subscription: Subscription | undefined;
  page: number = 1;
  constructor(
    private rickAndMortyService: RickAndMortyService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getSearchCharacters();
  }

  getCharacters() {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.filterCharacters();
    });
  }

  getSearchCharacters() {
    this.subscription = this.searchService.currentSearchTerm.subscribe(term => {
      this.searchTerm = term;
      this.filterCharacters();
    });
  }

  filterCharacters(): void {
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.page++;
      this.loadCharacters();
    }
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = [...this.characters, ...data.results];
      this.filterCharacters();
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}