import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterdata: string): any[] {
    if(!items){
      return [];
    } 
    if(!filterdata){
      return items;
    } 
    filterdata = filterdata.toString().toLowerCase();
      return items.filter( item => {
        return item.name.toLowerCase().includes(filterdata);
    });
  }
}