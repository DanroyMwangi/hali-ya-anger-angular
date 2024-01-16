import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../../config/constants';
import { WeatherData } from '../models/weatherdata.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) {
    
  }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(
      constants.weatherBaseURL
        .toString()
        .concat(cityName.toString()),
      {
        headers: new HttpHeaders()
          .set(constants.XRapidAPIHostLabel, constants.XRapidAPIHostValue)
          .set(constants.XRapidAPIKeyLabel, constants.XRapidAPIKeyValue),
      }
    );
  }
}