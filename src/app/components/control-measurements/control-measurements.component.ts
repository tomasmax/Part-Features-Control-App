import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feature-control-measurements',
  templateUrl: './control-measurements.component.html',
  styleUrls: ['./control-measurements.component.css']
})
export class ControlMeasurementsComponent implements OnInit {
  @Input() name: string;
  @Input() dev: number;
  @Input() devTotal: number;
  @Input() status: string;

  constructor() { }

  ngOnInit() {

  }

}
