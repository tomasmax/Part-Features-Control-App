import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartComponent } from './components/part/part.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ControlMeasurementsComponent } from './components/control-measurements/control-measurements.component';

import { PartFeaturesService } from './services/part-features.service';
import { ControlsColumnDividerPipe } from './pipes/controls-column-divider.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PartComponent,
    FeatureComponent,
    ControlMeasurementsComponent,
    ControlsColumnDividerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [PartFeaturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
