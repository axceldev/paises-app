import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public get httpParams(): HttpParams{
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population' );
  }

  constructor(private http: HttpClient) { }

  public buscarPais( termino: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url, { params: this.httpParams }  );

  }

  public buscarCapitalPais( termino: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );

  }

  public getPaisPorCodigo( id: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha?codes=${id}`;
    return this.http.get<Country[]>( url );

  }

  public buscarRegionPais( region: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );

  }



}
