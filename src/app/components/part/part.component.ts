import { Component, OnInit } from '@angular/core';
import { PartFeaturesService } from '../../services/part-features.service'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  partName: string;
  featureList: Array<Object> = [];

  constructor(
    private partFeaturesService: PartFeaturesService
  ) { }

  ngOnInit() {

    console.log('part.component ngOnInit')

    // initialize lists with data from the backend
    this.partFeaturesService.getPartFeaturesData()
      .subscribe(
        response => {
          this.featureList = response.features;
          this.partName = response.part_name;
          console.log(`Part Component ${this.partName} data feched`);
          console.log(this.featureList);
        });

  }

  checkFeaturesControlColumns() {
    
  }

  getGridStyle() {
    if (this.featureList.length > 2) {
      
      
    } 
  }

}
