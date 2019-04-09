import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { IBrasserie } from './IBrasserie'

@Injectable({
  providedIn: 'root'
})
export class BrasserieDataService {

  constructor(private httpClient: HttpClient) {

  }

  getBrasseries(): Observable<IBrasserie[]> {

    return this.httpClient.get<IBrasserie[]>("https://api.openbrewerydb.org/breweries");
  }
}