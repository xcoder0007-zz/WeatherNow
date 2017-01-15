import {Component} from '@angular/core';
import {Items} from './items.constructor';
import {WeatherService} from './service';


@Component({
         selector:'SearchComponent',
         templateUrl:'../weather/SearchComponent.html'
})

export class SearchComponent {

city : string

constructor(private _WeatherService : WeatherService){

}
  onSubmit() { 

this._WeatherService.SearchWeatherAPI(this.city,"b0ca6bb77b0c0eb7a4647911c29e4483").subscribe(

   date => {
     const weatherItem  = new Items(date.name,date.weather[0].description,22);
     this._WeatherService.AddWeatherItem(weatherItem);
   }

);
  

    }

}