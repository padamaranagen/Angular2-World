

ES6-Javascript New Features
===========================

A BRIEF HISTORY: ECMASCRIPT AND JAVASCRIPT

>* Developed by Berndan Eich
> * Released in 1995. Netscape navigator 2.0
> * Submitted to ECMA international in 1996
>*  Many languages derived from ECMAScript like: ActionScript, JScript

Features

> Complex applications
> Libraries
> code generators
> New Features

Compiler

https://babeljs.io/

### Many new features

#### 1. Block scoping with let

```
//ES6
var x="Enter a value";
if(true){{
  let x=10;
}}
console.log(x);
```

```
//ES5
var x = "Enter a value";
if (true) {
  {
    var _x = 10;
  }
}
console.log(x);
```
#### 2. Block scoping with const
```
//ES6
const pi=3.1415
```
```
//ES5
var pi = 3.1415;
```
#### 3. Classes [ using Traceur]
```
//ES6
class Airline{
  constructor(Id,FlightFrom,FlightTo,Startdate){
    this.Id=Id;
    this.FlightFrom=FlightFrom;
    this.FlightTo=FlightTo;
    this.Startdate=Startdate;
  }
  getAirline(){
    return this.Id+" flight start by "+this.Startdate+" from "+this.FlightFrom+" to"+this.FlightTo;
  }
}
```

```
//ES5
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//ES6
var Airline = function () {
  function Airline(Id, FlightFrom, FlightTo, Startdate) {
    _classCallCheck(this, Airline);

    this.Id = Id;
    this.FlightFrom = FlightFrom;
    this.FlightTo = FlightTo;
    this.Startdate = Startdate;
  }

  _createClass(Airline, [{
    key: "getAirline",
    value: function getAirline() {
      return this.Id + " flight start by " + this.Startdate + " from " + this.FlightFrom + " to" + this.FlightTo;
    }
  }]);

  return Airline;
}();
```
#### 4. Default function parameters
#### 5. Collections
#### 6. Destructing
#### 7. Rest parameters & Spread operator
#### 8. Iterator
#### 9. Array Comprehension
#### 10. Modules


Introduction Done!!!