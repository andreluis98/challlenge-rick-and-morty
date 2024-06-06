import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService) {
    this.searchService.currentSearchTerm.subscribe(term => this.searchTerm = term);
  }

  onSearchChange(term: string): void {
    this.searchService.updateSearchTerm(term);
  }
}