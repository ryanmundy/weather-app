import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly BASE_URL = 'https://api.open-meteo.com/v1/';

  constructor(private http: HttpClient) { }

  public getCurrentWeather(lng: string, lat: string): Observable<any> {
    return this.http.get(this.BASE_URL + `forecast?latitude=${lat}&longitude=${lng}&current_weather=true&temperature_unit=fahrenheit`);
  }
}
