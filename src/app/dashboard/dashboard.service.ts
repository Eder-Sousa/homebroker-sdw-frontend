import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //readonly baseUrl = 'https://bootcamp-dio.herokuapp.com/bootcamp/'
  readonly baseUrl = 'https://bootcamp-sdw.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    //const url = 'https://bootcamp-dio.herokuapp.com/bootcamp/stock';
    //const url = 'https://bootcamp-sdw.herokuapp.com/api/stocks';
    return this.http.get<Stock[]>(`${this.baseUrl}/stocks`).toPromise();
  }
}
