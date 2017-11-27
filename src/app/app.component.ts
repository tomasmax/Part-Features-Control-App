import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { PartFeaturesService } from './services/part-features.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Part Features Control App';

  constructor(private partFeaturesService: PartFeaturesService) {

  }

}
