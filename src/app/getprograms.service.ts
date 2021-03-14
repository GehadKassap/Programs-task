import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { observable, Observable } from 'rxjs';
import {BehaviorSubject} from "rxjs/BehaviorSubject"


const localUrl = 'assets/progs.json';

@Injectable({
  providedIn: 'root'
})
export class GetprogramsService {
filterForm = new BehaviorSubject<any>('');
  constructor( private _HttpClient:HttpClient) {

  }

  getAllData():Observable<any>
  {
    return this._HttpClient.get(localUrl);
  }
  setFilterForm(data:any)
  {
    this.filterForm.next(data) ;
    console.log(this.filterForm )

  }
  getFilterForm()
  {
    console.log(this.filterForm.asObservable())

    return this.filterForm.asObservable();
  }


}
