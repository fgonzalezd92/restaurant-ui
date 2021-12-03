import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlatillo } from './Entities/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  private _url: string = "https://localhost:44370/Platillo";

  constructor(private http: HttpClient) { }

  getPlatillos(): Observable<IPlatillo[]>{
    return this.http.get<IPlatillo[]>(this._url);
  }
}
