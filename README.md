# ControlApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

Web app developed using Angular 5 + Bootstrap 3

This web app is a simulation of a Dashboard. It shows some measurements of every feature on a part.

Considering that the interface needs to be refreshed every time a piece is produced, event received
on the backend.

To solve this problem I followed Best Practices and patterns: I used an observable data service that can be used to provide data to multiple parts of the application. This is the correct path to follow, because we are receiving the refresh event from the Back End, and the Service is the one that comu 
A Subject is both an Observable (so we can subscribe() to it) and an Observer (so we can call next() on it to emit a new value). We exploit this feature. A Subject allows values to be multicast to many Observers.
I chose BehaviorSubject, One of the variants of Subjects, which has a notion of "the current value". It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.
We exploit this: whenever we create an ObservingComponent, it gets the current value of the different mocked datas JSON from the BehaviorSubject automatically. Instead of sending the entire JSON I send a randomly generated integer number indexed between 0 and Mocked Data List length - 1, and after a method fetched the new data from the service.

As this new frontend  app needs to run on low specs hardware on premise at the factory, I added the external vendor assets as Bootstrap(css, js) and its requirements(jquery...) as npm modules and linked them with Angular CLI config, which uses webpack, in order to be quicker. Instead of adding links to external CDNs, avoiding extra http requests.


##Running instructions

Supposing you have node and npm installed. Go to the root folder of this project and type in your terminal:

$ npm install

This will install all the dependecies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##Next TODO's

One of the key improvements for this project would be to use websockets, allowing the back end to send events, with the new measurements data, every 10 senconds to the front end. This is the best way to get notifications from the back end and avoiding to do an http request every 10 senconds to fetch the updated data.

Angular utilizes RxJS which is essentially a javascript implementation of reactive extensions. This is a library for composing asynchronous and event-based programs using observable sequences and is perfect for working with websockets. RxJS allows us to listen to new messages from a websocket connection and then perform an action when ‘X’ event occurs. The best way to implement websockets in our angular applications would be to encapsulate our websockets and events in a service and then call that service in whatever components we wish to interact with a websocket. (As I mentioned before I already implemented an observable data service to provide data to multiple components of the application. So the logic is good to add websockets, we only need to change the mocked Data for the websockets and handle the events coming from the back end to refresh the UI)

Another TODO's would be:

* Create a main page to choose between different pieces / parts and access to their dashboard.
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
