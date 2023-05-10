import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  API_CEP_URL = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getCEP(cep: string): Observable<any> {
    return this.http.get<any>(this.API_CEP_URL + cep + '/json');
  }

}
