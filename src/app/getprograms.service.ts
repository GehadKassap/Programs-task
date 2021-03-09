import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const localUrl = 'assets/progs.json';

@Injectable({
  providedIn: 'root'
})
export class GetprogramsService {

  constructor( private _HttpClient:HttpClient) {

  }
  getSmartphone() {
    return this._HttpClient.get(localUrl);
  }
//  public getData()
//   {
//     let sub ;
//    sub = this._HttpClient.get('assets/progs.json')
//     console.log(sub);
//   }
}
