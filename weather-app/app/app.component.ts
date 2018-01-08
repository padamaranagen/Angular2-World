import {Component} from 'angular2/core';
import {Weather} from './weather';
@Component({
	selector:'my-app',
    template:
    `
    <h1>Weather App</h1>
    <input [(ngModel)]="city" (keyup)="addCity(city,$event)" placeholder="Search weather in city">   
    <ul *ngFor="#weather of weatherOfCities">
        <li>
            <h2>{{weather.city}}:</h2>
        </li>
        <ul>
            <li> Weather type :{{ weather.main }}</li>
            <li> Weather decrition: {{weather.description}</li>
        </ul>    
    </ul>
    `
})
export class AppComponent{
    public city: string;
    public cities: Array<string>;
    public weatherOfCities: Array<Weather>;
    //weather: weather;
	constructor(){
        this.city = '';
        //this.weather = new weather(1, "Tirupati", "sunshine", "Beautiful with sunshine");
        this.weatherOfCities = [];
    }
    getWeather = function (city: string) {
        var weather: Weather;
        if (city.toLocaleLowerCase() == "Tirupati") {
            weather = {"id":1,"city": "Tirupati","main": "Clouds","description": "overcast clouds"};
        }
        else if (city.toLocaleLowerCase() == "Bangalore") {
            weather = {"id": 2,"city": "Bangalore","main": "Rain","description": "very heavy rain"};
        }
        return weather;
    }
    addCity = function (city: string, $event) {
        if ($event.keyCode == 13) {
            var weather = this.getWeather(city);
            if (weather) {
                this.weatherOfCities.push(this.getWeather(city));
            }
            this.city = "";
        }
    }
}

