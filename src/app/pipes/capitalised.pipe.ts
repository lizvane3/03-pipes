import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalised'
})

export class CapitalisedPipe implements PipeTransform {
  transform(value: any, allNames: boolean = true ): string {
    value = value.toLowerCase();
    let names = value.split(' ');
    if (allNames) {
      for (let i in names) {
        names[i] = names[i][0].toUpperCase() + names[i].substring(1);
      }
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substring(1);
    }

    console.log(names[2].substring(1));
    return names.join(' ');
  }
}
