import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlsColumnDivider'
})
export class ControlsColumnDividerPipe implements PipeTransform {

  transform(objects: any[]): any[] {
    if (objects) {
      return objects.filter((item, index) => index > 11)
    }
  }

}
