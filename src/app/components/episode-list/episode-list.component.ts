import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit, OnDestroy {
  episodes: any[] = [];
  filteredEpisodes: any[] = [];
  searchTerm: string = '';
  private subscription: Subscription | undefined;
  page: number = 1;

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.getEpisodes();
    this.getSearchEpisodes();
  }

  getEpisodes() {
    this.rickAndMortyService.getEpisodes().subscribe((data: any) => {
      this.episodes = data.results;
      this.filterEpisodes();
    });
  }

  getSearchEpisodes() {
    this.subscription = this.searchService.currentSearchTerm.subscribe(term => {
      this.searchTerm = term;
      this.filterEpisodes();
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.page++;
      this.loadEpisodes();
    }
  }

  loadEpisodes(): void {
    this.rickAndMortyService.getEpisodes(this.page).subscribe((data: any) => {
      this.episodes = [...this.episodes, ...data.results];
      this.filterEpisodes();
    });
  }

  filterEpisodes(): void {
    this.filteredEpisodes = this.episodes.filter(episode =>
      episode.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
