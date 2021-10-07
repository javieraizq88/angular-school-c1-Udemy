import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identity'
})
export class IdentityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
