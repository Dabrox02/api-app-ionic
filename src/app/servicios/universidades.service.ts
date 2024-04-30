import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {
  private url: string = "http://universities.hipolabs.com/search?country=colombia";
  public offset:number = 0;
  public limit:number = 5;

  constructor(public _http: HttpClient) {
  }

  getPersonas<T>(){
    const fullpath: string = `${this.url}&offset=${this.offset}&limit=${this.limit}`;
    console.log(fullpath);
    return this._http.get<T[]>(fullpath);
  }


}
