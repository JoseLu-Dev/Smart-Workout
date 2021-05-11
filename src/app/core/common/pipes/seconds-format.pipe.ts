import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsFormat'
})
export class SecondsFormatPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    let formattedSeconds = '';

    if(minutes != 0 && minutes != null){
      formattedSeconds += `${minutes}'`;
    }

    if(minutes != 0 && seconds != 0){
      formattedSeconds += ' ';
    }

    if(seconds != 0 && seconds != null){
      formattedSeconds += `${seconds}''`;
    }

    return formattedSeconds;
  }

}
