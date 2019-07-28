import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Club } from '../entities/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl: string = "http://localhost:8080/api/clubes";

  constructor(private httpClient: HttpClient) { }

  getClube( id: number ) {
    return this.httpClient.get(this.baseUrl + '/${id}');
  }

  getListClube() {
    return this.httpClient.get(this.baseUrl);
  }
  
  createClube( clube : Club ) {
    return this.httpClient.put(this.baseUrl, clube);
  }

  updateClube( clube : Club ) {
    return this.httpClient.post(this.baseUrl, clube);
  }

  deleteClube( id : number){
    return this.httpClient.delete(this.baseUrl + '/${id}');
  }
}
