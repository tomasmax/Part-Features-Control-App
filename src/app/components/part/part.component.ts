import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartFeaturesService } from '../../services/part-features.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
// ObservingComponent
export class PartComponent implements OnInit, OnDestroy {
  partName: string;
  featureList: Array<Object> = [];
  // subscription to
  subscription: Subscription;

  constructor(
    private partFeaturesService: PartFeaturesService
  ) { }

  ngOnInit() {

    console.log('part.component ngOnInit')

    // initialize lists with data from the backend
    this.getData();

    // subscribe to the events emitted by partFeaturesService service
    this.subscription = this.partFeaturesService.data$
        .subscribe(value => {
          console.log(`Event received at PartComponent ObservingComponent with value: ${value}`)
          this.getData();
        });
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  getData() {
    this.partFeaturesService.getPartFeaturesData()
    .subscribe(
      response => {
        this.featureList = response.features;
        this.partName = response.part_name;
        console.log(`Part Component ${this.partName} data feched`);
        console.log(this.featureList);
      });
  }

  public checkFeaturesControlColumns(index) {
    
    if (this.featureList[index].hasOwnProperty('controls')) {
      if (this.featureList[index]['controls'].length > 12) {
        return true;
      }
    }  
    return false;
  }

  getGridStyle() {
    if (this.featureList.length <= 2) {
      if (this.checkFeaturesControlColumns) {

      }
      
    } else if (this.featureList.length <= 4) {


    } else if (this.featureList.length <= 6) {

    }
  }

}
