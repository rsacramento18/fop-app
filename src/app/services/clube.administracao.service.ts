import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Club } from '../entities/club';
import { ClubeAdministracao } from '../entities/clubeAdministracao';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ClubeAdministracaoService {
  private baseUrl: string = "http://35.242.157.26:8080/fop-core/api/clubeadministracao";

  constructor(private httpClient: HttpClient) { }

  getClubeAdministracao( id: number ) {
    return this.httpClient.get(this.baseUrl + '/${id}');
  }

  getListClubeAdministracao() {
    return this.httpClient.get(this.baseUrl);
  }

  getListClubeAdministracaoCriteria(values: string[], fields: string[], operators: string[]) {
      if(values.length > 0) {
          var params = new HttpParams();
          for( var i = 0; i < values.length; i++) {
              params = params.append('value', values[i]);
              params = params.append('field', fields[i]);
              params = params.append('operator', operators[i]);
          }
          return this.httpClient.get(this.baseUrl, {params});
      }
      return this.httpClient.get(this.baseUrl);

  }
  
  createClubeAdministracao( clubeAdministracao : ClubeAdministracao ) {
    return this.httpClient.put(this.baseUrl, clubeAdministracao);
  }

  updateClubeAdministracao( clubeAdministracao : ClubeAdministracao ) {
    return this.httpClient.post(this.baseUrl, clubeAdministracao);
  }

  deleteClubeAdministracao( id : number){
    return this.httpClient.delete(this.baseUrl + '/${id}');
  }
}

