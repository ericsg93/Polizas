import { Poliza } from './../_models/poliza';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class PolizaService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPolizas(): Observable<Poliza[]> {
    return this.http.get<Poliza[]>(this.baseUrl + 'polizas');
  }

  getPoliza(id): Observable<Poliza> {
    return this.http.get<Poliza>(this.baseUrl + 'polizas/' + id);
  }

  updatePoliza(id: number, poliza: Poliza) {
    return this.http.put<Poliza>(this.baseUrl + 'polizas/' + id, poliza);
  }

  deletePoliza(polizaId: number) {
    return this.http.delete(this.baseUrl + 'polizas/' + polizaId);
  }

  postPoliza(model: any) {
    return this.http.post(this.baseUrl + 'polizas', model);
  }
}
