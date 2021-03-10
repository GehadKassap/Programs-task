import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { observable, Observable } from 'rxjs';

const localUrl = 'assets/progs.json';

@Injectable({
  providedIn: 'root'
})
export class GetprogramsService {

  constructor( private _HttpClient:HttpClient) {

  }

  getAllData():Observable<any>
  {
    return this._HttpClient.get(localUrl);
  }


}
