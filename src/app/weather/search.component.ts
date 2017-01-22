import { Component, OnInit } from '@angular/core';
import { Items } from './items.constructor';
import { WeatherService } from './service';
import { Subject } from 'rxjs/Rx';


@Component({
  selector: 'SearchComponent',
  templateUrl: '../weather/SearchComponent.html'
})

export class SearchComponent implements OnInit {

  city: string

  constructor(private _WeatherService: WeatherService) {

  }
  onSubmit() {

    this._WeatherService.SearchWeatherAPI(this.city, "b0ca6bb77b0c0eb7a4647911c29e4483").subscribe(

      data => {
        const weatherItem = new Items(data.name, data.weather[0].description, data.main.temp);
        this._WeatherService.AddWeatherItem(weatherItem);
      }

    );


  }

  private searchStream = new Subject<string>();


  OnSearch(city: string) {

    this.searchStream
      .next(city);
  }

  ngOnInit() {
    this.searchStream.subscribe(
      data => console.log(data)
    )
  }


}