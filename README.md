# ControlApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

##Running instructions

Supposing you have node and npm installed. Go to the root folder of this project and type in your terminal:

$ npm install

This will install all the dependecies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##Next TODO's

One of the key improvements for this project would be to use websockets, allowing the back end to send events every 1o senconds with the new measurements data. This is the best way to get notifications from the back end and avoiding to do an http request every 10 senconds to fetch the updated data.

Angular utilizes RxJS which is essentially a javascript implementation of reactive extensions. This is a library for composing asynchronous and event-based programs using observable sequences and is perfect for working with websockets. RxJS allows us to listen to new messages from a websocket connection and then perform an action when ‘X’ event occurs. The best way to implement websockets in our angular applications would be to encapsulate our websockets and events in a service and then call that service in whatever components we wish to interact with a websocket.

Another TODO's would be:

* Create a main page to Select different pieces or parts.
* Add Angular router to create a navigation flow within the app.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
