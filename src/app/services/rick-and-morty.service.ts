import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character?page=${page}`);
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }

  getEpisodes(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/episode?page=${page}`);
  }

  getEpisode(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/episode/${id}`);
  }
}
