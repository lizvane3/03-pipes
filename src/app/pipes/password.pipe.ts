import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
    /*if (active) {
      let replace = '';
      for ( let i = 0; i < value.length; i++) {
        replace += '*';
      }
      value = replace;
    }
    return value;*/
    return active ? '*'.repeat(value.length) : value;
  }

}
