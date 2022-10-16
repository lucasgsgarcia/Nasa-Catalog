import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { IPicsWithDataFilter } from '../interfaces/IPicsWithDataFilter'

@Injectable({
  providedIn: 'root'
})
export class PicsService {

  constructor(private httpClient : HttpClient) { }

  
  obterComDataParams(dataEspecifica : string){
    return this.httpClient.get<IPicsWithDataFilter>(`${API_PATH}date=${dataEspecifica}`).toPromise();
  }
  obterComIntervaloData(dataInicial : string, dataFinal : string){
    return this.httpClient.get<IPicsWithDataFilter>(`${API_PATH}start_date=${dataInicial}&end_date=${dataFinal}`).toPromise();
  }
}
