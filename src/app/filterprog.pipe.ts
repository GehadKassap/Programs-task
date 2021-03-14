import { Pipe, PipeTransform } from '@angular/core';
import {GetprogramsService} from './getprograms.service';
@Pipe({
  name: 'filterprog'
})
export class FilterprogPipe implements PipeTransform {
// constructor(public _GetprogramsService:GetprogramsService){
//   console.log(this._GetprogramsService.getFilterForm())
// }
  transform(programs:any[]): any {
    // let result:any;
    // let filter = term ? term : null;
    // let filteredArray =

    // if(term == undefined )
    // {
    //   return programs;
    // }
    //console.log(programs)
    // else
    // {

    // }
    // console.log(term)
    // else{
    //   return programs.filter((data) => {data.type.includes(term) &&
    //     data.school.includes(term) });
    // }
//     // return programs.filter( function(programs){
//     //   return (programs.city.toLowerCase().includes(term) );
// });

//  alert(programs)
// // console.log(term)

// if (filter && Array.isArray(programs)) {
//     let filterKeys = Object.keys(filter);
//     result= programs.filter((item:any) =>
//         filterKeys.reduce((isExist:any, Type:any) =>
//             isExist && item[Type].toString().indexOf(filter[Type].toString()) !== -1, true
//         )
//     );
// }
// else {
//     return programs;
// }
// return result;
// }
 // programs.filter(arrayItem => arrayItem.name === term.Type
    //   && arrayitem.price === filterPrice);
/*********************************** */
  }

}
