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