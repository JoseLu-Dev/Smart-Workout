import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'setQuantityFormatter'
})
export class SetQuantityFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(!value){ value = 0;}
    if(args[0] === true){
      return `${value}''`;
    }
    return `${value} reps`;
  }

}
