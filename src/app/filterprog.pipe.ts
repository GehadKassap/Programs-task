import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterprog'
})
export class FilterprogPipe implements PipeTransform {

  transform(programs:any[] , term:object): any {

    if(term == undefined )
    {
      return programs;
    }

    return programs.filter( function(programs){
      return (programs.city.toLowerCase().includes(term) );
});



  }

}
