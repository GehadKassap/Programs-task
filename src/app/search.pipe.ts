import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(programs:any[] , term:string): any {

    if(term == undefined )
    {
      return programs;
    }
    return programs.filter( function(programs){
          return programs.type.toLowerCase().includes(term.toLowerCase());
    });
  }

}
