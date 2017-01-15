import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainWeather } from './weather/main.component';
import { SearchComponent } from './weather/search.component';
import {WeatherService} from './weather/service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWeather,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
