import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MockPartFeaturesData } from './part-features.data.mock';
import { MockPartFeaturesData1 } from './part-features.data.mock';
import { MockPartFeaturesData2 } from './part-features.data.mock';
import { MockPartFeaturesData3 } from './part-features.data.mock';

@Injectable()
export class PartFeaturesService {
  // List with the mocked data
  mockedDataArray: Array<Object> = [MockPartFeaturesData, MockPartFeaturesData1, MockPartFeaturesData2, MockPartFeaturesData3];
  currentMockedData: Object = MockPartFeaturesData;

  // Observable Subject source
  // BehaviorSubject is a variant of Subject. It has the notion of "the current value". 
  // We exploit this: whenever we create an ObservingComponent, it gets the current navigation item value from the BehaviorSubject automatically.
  private dataSource = new BehaviorSubject<number>(0);
  // Observable Subject stream
  data$ = this.dataSource.asObservable();

  constructor() {
    console.log('PartFeaturesService started')

    // start updating data every 10 seconds
    this.updateData();
   }

   // get mocked data
   public getPartFeaturesData() {

    let response = new ResponseOptions({
      body: JSON.stringify(this.currentMockedData)
    });

    let obResponse = Observable.of(new Response(response));

    return obResponse.map(result => result.json());

   }

   getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min); //The maximum is inclusive and the minimum is inclusive 
  }

   selectRandomMockedData() {
    let index = this.getRandomIntInclusive(0,this.mockedDataArray.length-1); // get random index between 0 - this.mockedDataArray.length-1
    this.currentMockedData = this.mockedDataArray[index];
    console.log(`## PartFeaturesService selectRandomMockedData index: ${index}`);
    console.log(this.currentMockedData);
    // add new value to the subject bus, ObservingComponents would receive the event
    this.dataSource.next(index);
   }

   updateData() {
    // update mocked data every 10 seconds
    // use arrow function or .bind() in order this points to the class
    setInterval( () => { this.selectRandomMockedData() }, 10000);

   }

}
