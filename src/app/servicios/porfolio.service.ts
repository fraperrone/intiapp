import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }

  //PRUEBA
  obtenerDatos(): Observable<any>{
    // URL para obtener datos:
    return this.http.get('')
  }
}
