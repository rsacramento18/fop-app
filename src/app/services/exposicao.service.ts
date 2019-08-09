import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exposicao } from '../entities/exposicao';

@Injectable({
  providedIn: 'root'
})
export class ExposicaoService {
  private baseUrl: string = "http://localhost:8080/fop-core/api/exposicoes";

  constructor(private httpClient: HttpClient) { }

  getExposicao( id: number ) {
    return this.httpClient.get(this.baseUrl + '/${id}');
  }

  getListExposicao() {
    return this.httpClient.get(this.baseUrl);
  }
  
  createExposicao( exposicao : Exposicao) {
    return this.httpClient.put(this.baseUrl, exposicao);
  }

  updateExposicao( exposicao : Exposicao) {
    return this.httpClient.post(this.baseUrl, exposicao);
  }

  deleteExposicao( id : number){
    return this.httpClient.delete(this.baseUrl + '/${id}');
  }
}
