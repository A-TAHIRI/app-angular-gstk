import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  standalone: true,
  name: 'async'
})
export  class  AsyncPipe  implements PipeTransform{
  transform(value: Observable<any>, ...args: any[]): any {
    return value;
  }

}

