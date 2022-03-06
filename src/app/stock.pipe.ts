import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: Number, ...args: unknown[]): any {
    
    if(value===0){
      return value + "out of stock";
    }else{
      
      return 'In the stock';
    }
    
  }

}
