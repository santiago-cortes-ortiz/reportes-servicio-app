import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Reporte } from '../interface/reporte';
import { Respuesta } from '../interface/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private readonly urlApi = environment.backendUrl

  constructor(private _http: HttpClient) { }

  hacerReporte(reporte: Reporte): Observable<Respuesta> {
    return this._http.post<Respuesta>(`${this.urlApi}/reportes`, reporte);
  }

  calcularHoras(idTecnico: string,numeroSemana: number): Observable<Respuesta>{
    return this._http.get<Respuesta>(`${this.urlApi}/reportes/calcularHoras/${idTecnico}/${numeroSemana}`);
  }
  

}

