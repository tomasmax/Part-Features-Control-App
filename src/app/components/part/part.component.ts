import { Component, OnInit } from '@angular/core';
import { PartFeaturesService } from '../../services/part-features.service'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
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
          console.log('Part Features');
          console.log(response.features);
          this.featureList = response.features;
        });

  }

}
