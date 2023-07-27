import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  public async getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          resolve({ lng: position.coords.longitude, lat: position.coords.latitude });
        })
      } else {
        reject(new Error('browser does not support geolocation api'));
      }
    });
  }
}
