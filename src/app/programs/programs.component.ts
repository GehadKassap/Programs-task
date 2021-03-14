import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetprogramsService } from './../getprograms.service';
import {FilterprogPipe} from './../filterprog.pipe'


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {

  allData:any = [];
  /************* */
  wordType:string ="" ;
  wordCity:string="";
  wordFilter:any
  /******************* */

 /*****attrs for filtering data */
  city:any;
  school:any;
  field:any;
  lang:any = "all";
  sort:any ="lh";
  prog:any ="bach";
  /********************** */

  /******************** */




    constructor(private _GetprogramsService:GetprogramsService ) {

    _GetprogramsService.getAllData().subscribe( (data) =>
    {
      //this.allData = data[2].data
      console.log(data[2].data)
    //  this.allData =[... new Set(data[2].data)]
     // this.allData = Array.from(new Set(data[2].data))
     const objectt :any = {}
     data[2].data = data[2].data.filter( (item:any , index:any) =>{
       let exsist = objectt.hasOwnProperty(item.Name || item.type ||item.school
        || item.city ||item.level || item.Language  ||item.length ||item.fee
        ||item.intake)
       return exsist ? false : objectt[item.Name] =true
     })
     this.allData = data[2].data;
     console.log(this.allData)
    //   this.allData  = data[2].data.reduce((unique:any, o:any) => {
    //     if(!unique.some((obj:any)=> obj.Name === o.Name && obj.type === o.type)) {
    //       unique.push(o);
    //     }
    //     return unique;
    // },[]);
/********************************* */
      //  data[2].data.forEach((item:any, index:any) => {
      //    if (this.allData.findIndex(( index:any) => item.Name == item.Name) === -1)
      //     {
      //       this.allData.push(item)
      //      }

      //  });
      /*************************** */


    //this.allData = [...new Set(data[2].data)];
    /************************* */
  //   data[2].data.forEach((c:any) => {
  //     if (!this.allData.includes(c)) {
  //       this.allData.push(c);
  //       //return this.allData
  //     }
  // });



/***************************************** */
    })



   }
   //this._GetprogramsService.getFilterForm()
   search() {
    }

   /******to get values of filter form  */
   getFilteredValues(info:NgForm):void
   {
         // console.log("info.value")

           this._GetprogramsService.setFilterForm(info.value) ;
          // this._FilterprogPipe.transform(this.allData );
          //  console.log()

   }


   ngOnInit() {


  }

}

