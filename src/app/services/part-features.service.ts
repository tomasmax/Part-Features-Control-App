import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/Rx'

import { MockPartFeaturesData } from './part-features.data.mock';

@Injectable()
export class PartFeaturesService {

  constructor() {
    console.log('PartFeaturesService started')
   }

   // get mocked data
   public getPartFeaturesData() {

    let response = new ResponseOptions({
      body: JSON.stringify(MockPartFeaturesData)
    });

    let obResponse = Observable.of(new Response(response));

    return obResponse.map(result => result.json());

   }

}
