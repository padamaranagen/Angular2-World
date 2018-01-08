# weather app

* mkdir weather app
* cd weather app

weather app>npm init
```
{
  "name": "angular2-setup",
  "version": "1.0.0",
  "description": "my first angular2 app",  
  "author": "nagendramca2011@gmail.com",
  "license": "UNLICENSED",   
}
```
#### package.json
```
{
  "name": "weather-app",
  "version": "1.0.0",
  "description": "weather app", 
   "scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
  },
  "author": "nagendramca2011@gmail.com",
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.0",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"
  },
  "devDependencies": {
    "concurrently": "^1.0.0",
    "lite-server": "^1.3.1",
    "typescript": "^1.7.3"
  }
}
```
package.json is the configuration file that any node application use. 
Where 
* name is the name of your app. 
* version is the version number of your app. 
* scripts are the scripts which are executed in your app
    * "tsc": "tsc" run the Typescript compiler once
    * "tsc:w":"tsc -w" run the Typescript compiler in watch mode
    * "lite": "lite-server", it is the local server and it is a static file server 
* dependencies are the dependencies of your app
    * "angular2": "2.0.0-beta.0", Angular 2 Version 
    * "systemjs": "0.19.6", this is the library for loading javascript angular in the browser 
     * "es6-promise": "^3.0.2", "es6-shim": "^0.33.3", "reflect-metadata": "0.1.2",  "rxjs": "5.0.0-beta.0",  "zone.js": "0.5.10" all libraries used by Angular 2
 
####  tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules"
  ]
}
```

This is the configuration file for Typescript. 

* "target": "ES5", Transpile Typescript files to es5
*  "sourceMap": true, If you want to debug your application , you should set this to true.

#### weather app first component

#### app.component.ts

```
import {Component} from 'angular2/core';
@Component({
  selector:'my-app',
  template:'<h1>Weather App</h1>'
})
export class AppComponent{

}
```
```
import {Component} from 'angular2/core' 
```

import the "component" module from the angular2 core library

```
@Component({
  selector:'my-app',
  template:'<h1>Weather App</h1>'
})

```
This is a decorator of our standard ES6 class tells angular that this is a component.
*  selector: should match with a dom element in the form <my-app></my-app>
* Template: It is the HTML to be placed in the selector.

```
export class AppComponent{

}
```
It is a standard ES6 class where we should  put all our code related to the main app. This class is exported as AppComponent. 

#### boot.ts
```
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);
```

```
import {bootstrap} from 'angular2/platform/browser'
```
We are telling to angular that we will load the application from the browser. 
The idea of this file is that we can bootstrap Angular2 from the browser, server (Angular Universal), Apache Cordova, NativeScript or any other problem.

```
import {AppComponent} from './app.component'
```
We are importing our component "AppComponent" from the file "app.component"

```
bootstrap(AppComponent);
```
bootstrap will start your application

#### index.html
```
<html>

  <head>
    <title>Weather App</title>

    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order-->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>

    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/boot')
            .then(null, console.error.bind(console));
    </script>

  </head>

  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>

</html>
```

```
 System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/boot')
            .then(null, console.error.bind(console));
```
* Module loading from System.js library.
* defaultExtension: 'js', The default extension for our files are loaded are "js"
*  System.import('app/main').then(null, console.error.bind(console));, we are importing our file app/boot. If there any error print it in the console. 
* <my-app>Loading...</my-app>, This is the main entry point of our application. It should match our "selector" in the AppComponent


#### Compile and Run

npm start
* This line will take care of calling Typescript and transpile our TS file to JS files
* It will create a lite-server
* Loads the index.html

Open the browser and you should see your first angular application running

#### Weather Data

* Create an Interface that defines the weather structure that we are going to receive from our external api
* app.component will dislay the weather data 

##### weather.ts
export interface Weather{
"id":number,
"city":string,
"main":string,
"description":string
}

<ul>
  <li> Weather Type: {{ weather.main }}</li>
  <li> Description:{{weather.description}}<li>
</ul>

### Task 1

* We are going to get the city form the user input
* Add a html input
* Change dynamically the html for telling tht user about the city weather

procedure..

Open app.component.ts 

```
<input[(ngModel)]="city" placeholder="Search weather for your city">
```

* Meaning of (): It is an Event binding capturing the change of the model "city"
* Meanig of []: It is a bindig for displaying the value of city
* Meaning of [()]: Two-way data binding. It will chage the value of city and display the value of city always updated.

The syntax[()] is a short for
<input [ngModel]="city" (ngModelChange)="city=$event" placeholder="Search weather for your city">

* When the user press "enter" in out weather user input, we will start adding the weather of cities inside an array(weatherOfCities)
* Prepare the template for rendering the weather of several cities

Open app.component.ts
```
(keyup)="addCity(city,$event)
```
We capture the event "keyup" and call the method addCity
addCity will be declare in our Component
$event has all the information related to the "keyup" event

```
public cities:Array<string>;
```

Array of cities requed by the user.

```
 public weatherOfCities: Array<weather>;
```

Array of weather retured by our server. Currently the weather is hardcoded but we will modify this to get real weather from an Api

```
constructor(){
        this.city = 'Tirupati';
        this.weather = new weather(1, "Tirupati", "sunshine", "Beautiful with sunshine");
        this.weatherOfCities = [];
  }
```
Constructor of our AppComponent. This was added for learning purpose. We can have constructors in TypeScript. This initialization of variables could be done here or at definition time.


```
getWeather = function (city: string) {
    var weather: Weather;
    if (city.toLocaleLowerCase() == "Tirupati") {
        weather = {
            "id"=1,
            "city": "Tirupati",
            "main": "Clouds",
            "description": "overcast clouds"
        };
    }
    else if (city.toLocaleLowerCase() == "Bangalore") {
        weather = {
            "id"=1,
            "city": "Bangalore",
            "main": "Rain",
            "description": "very heavy rain"
        };
    }
    return weather;
}
```

This is a TypeScript class method. This is the weather data for the requested city. We will refactor this later on for returning real data.


```
addCity = function (city: string, $event) {
    if ($event.keyCode == 13) { 
    /*
    we check the KeyCode of the event (KeyCode==13) means "enter" key press
    */
        var weather = this.getWeather(city);
        if (weather) {
            this.weatherOfCities.push(this.getWeather(city));
        }
        this.clity = "";    
    }
}
```
This method is call when the user press enter. We receive the $event with data related to keyup event.


#### Angular2 STYLES

##### We should have a better design

* we are going to add styles to our component
* The style will be isolated from the rest of the application, so our css selector won't overlap with the global css of our page

You add the below code into app.component.ts

```
styles: [`
         header h1{
              padding:10px;
              background:#0094ff;
              color:#ff6a00;
              text-shadow:1px 1px 4px #ff6a00;
          }
          .context{
               padding:10px;
          }
          input{
              font-size:16px;
              padding:4px;
          }
          .weather-card{
              border-bottom:1px solid #808080;
              padding-bottom:10px;
          }
    `]
```

Every Component has their own "Styles" property
We can add normal css styles for customising our Component

INLINE CSS? WHY NOT EXTERNAL CSS?
* Use the property "styles" for inline css.
* Use the property "styleUrls" for external css files.
* External css is really powerful. We can use Sass and generate the css of our components.


```
@Component({
  .........,
  
  styleUrls:["app/app.component.css"]
})
```

#### Angular2: NGIF

What happen if the user type a city that doesn't  weather data?

* We should show a message to the user when we don't have weather data
* *nfif will be use for conditional showing if there is no data

```
 <p *ngIf="errorMessage" class="error-message">{{ errorMessage }} </p>
```
```*ngif``` for showing the paragraph only if there is an errorMessage
It is important to remember the ```*```
We ise the class "error-message" for the css style.

##### App.component.css

.error-message{
  color:red;
  font-style:8px;
}
