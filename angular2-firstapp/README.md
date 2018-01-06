Start your journey with Angular2
=

## Step 1 : Make directory and navigate to the directory
mkdir angular2-setup
cd angular2-setup

## Step 2 : npm init
#### angular2-setup\package.json
```
{
  "name": "angular2-setup",
  "version": "1.0.0",
  "description": "my first angular2 app",  
  "author": "nagendramca2011@gmail.com",
  "license": "UNLICENSED",   
}
```
add the **scripts**, **dependencies** and **devdependencies**
#### angular2-setup\package.json
```
{

  "name": "angular2-setup",
  "version": "1.0.0",
  "description": "my first angular2 app",
  "scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
  },
  "author": "nagendramca2011@gmail.com",
  "license": "UNLICENSED",
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
create a file called tsconfig.json under angular2-setup, then add the typescript compiler configuration 
#### tsconfig.json
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
## Step 3: 
create a folder called **app** under angular2-setup

Create a file called **main.ts**

```
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);
```
Create a file called **app.component.ts**

```
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }
```

## Step 4:
Create a index.html file user angular2-setup

```
<html>

  <head>
    <title>Angular 2 App</title>

    <!-- 1. Load libraries -->
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
      System.import('app/main')
            .then(null, console.error.bind(console));
    </script>

  </head>

  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>

</html>
```

### Start the application
npm start


