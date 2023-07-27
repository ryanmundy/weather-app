import { Component, OnInit } from '@angular/core';
import { LocationService } from '../resources/location/location.service';
import { WeatherService } from '../resources/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentWeather!: any;

  constructor(private locationService: LocationService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.requestWeather();
  }

  public roundTemperature(temp: number): number {
    return Math.floor(temp);
  }

  private requestWeather(): void {
    this.locationService.getCurrentLocation().then(location => {
      if (location) {
        console.log(location);
        this.weatherService.getCurrentWeather(location.lng, location.lat).subscribe(weather => {
          console.log(weather);
          this.currentWeather = weather;
        })
      }
    })
  }
}
