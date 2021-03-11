import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citysearch'
})
export class CitysearchPipe implements PipeTransform {

  transform(programs:any[] , term:string):any{

    if(term == undefined )
    {
      return programs;
    }
    return programs.filter( function(programs){
          return programs.city.toLowerCase().includes(term.toLowerCase());
    });
  }
  }


