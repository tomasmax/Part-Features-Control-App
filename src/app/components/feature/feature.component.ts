import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'part-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() status: string;
  @Input() controls: Array<Object> = [];

  readonly columnBreak: number = 12; // 0 indexed

  constructor() { }

  ngOnInit() {
    console.log('feature.component ngOnInit')

    console.log(this.name)

    console.log(this.controls)
  }

  getColumnsStyle() {

    if (this.controls.length <= this.columnBreak) {
      return 'col-xs-12 col-sm-12 col-md-12';
    } else {
      return 'col-xs-12 col-sm-6 col-md-6';
    }

  }

  getFeatureHeaderBarStyle() {
    if (this.status === 'ok') {
      return 'sub-header feature-header-green';
    } else if (this.status === 'warning') {
      return 'sub-header feature-header-yellow';
    } else if (this.status === 'bad') {
      return 'sub-header feature-header-red';
    }
  }

  getFeatureHeaderBarIconStyle() {
    if (this.status === 'ok') {
      return 'glyphicon glyphicon-ok-circle white-color';
    } else if (this.status === 'warning') {
      return 'glyphicon glyphicon-time white-color';
    } else if (this.status === 'bad') {
      return 'glyphicon glyphicon-remove-circle white-color';
    }
  }

  getControlsIconStyle(status) {
    if (status === "ok") {
      return 'glyphicon glyphicon-ok-circle green-color';
    } else if (status === "warning") {
      return 'glyphicon glyphicon-time yellow-color';
    } else if (status === "bad") {
      return 'glyphicon glyphicon-remove-circle red-color';
    }
  }

}
