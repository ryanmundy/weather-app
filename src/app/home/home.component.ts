import { Component, OnInit } from '@angular/core';
import { LocationService } from '../resources/location/location.service';
import { WeatherService } from '../resources/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentTemperature!: string;

  constructor(private locationService: LocationService, private weatherService: WeatherService){}

  ngOnInit(): void {
    this.requestWeather();
  }

  private requestWeather(): void {
    this.locationService.getCurrentLocation().then(location => {
      if (location) {
        console.log(location);
        this.weatherService.getCurrentWeather(location.lng, location.lat).subscribe(weather => {
          this.currentTemperature = `${Math.floor(weather.current_weather.temperature)}°`;
          console.log(weather);
        })
      }
    })
  }
}
