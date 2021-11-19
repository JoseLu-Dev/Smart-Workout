import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObject'
})
export class IsObjectPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return typeof value === 'object';
  }

}
