import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherData } from './models/weatherdata.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherServiceService) { }
  
  cityName?: string;
  weatherResponse?: WeatherData;
  isApiActive: boolean = false;
  message?: string;


  ngOnInit(): void {
    if (this.isApiActive) {
      this.weatherService.getWeatherData('Nairobi')
      .subscribe({
        next: (response) => {
          this.weatherResponse = response
        }
      });
    }
    else {
      this.message = "The Weather API has been disconnected"
    }
  }
  title = 'Hali ya Anger';

  min: number = 10;
  max: number = 30;
}
