import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartComponent } from './components/part/part.component';
import { FeatureComponent } from './components/feature/feature.component';

import { PartFeaturesService } from './services/part-features.service';

@NgModule({
  declarations: [
    AppComponent,
    PartComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PartFeaturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
