import {Component,OnInit} from '@angular/core';
import {Items} from './items.constructor';
import {List} from './items.data';
import {WeatherService} from './service';

@Component({
         selector:'main',
         templateUrl:'../weather/main.html',
         styleUrls:['../weather/main.css']
})

export class MainWeather implements OnInit{

constructor(private _weatherService:WeatherService){
    
}
items:Items[];

ngOnInit():any{
this.items = this._weatherService.getWeatherService();

}

}