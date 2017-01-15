import {Injectable} from '@angular/core';
import {List} from './items.data';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Items} from './items.constructor';


@Injectable()

export class WeatherService {


constructor (private _http: Http){

}
    getWeatherService(){

        return List;
    }


    AddWeatherItem(WeatherItem : Items){

List.push(WeatherItem);
    }

    SearchWeatherAPI(City:string,AppKey:string): Observable<any>{ 

        return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+City + "&appid="+AppKey)
        .map(response => response.json())
        .catch(error => {
            console.error(error);
            return Observable.throw(error.json())
        });
        

    }

}