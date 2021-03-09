import { Component  ,OnInit } from '@angular/core';
import { GetprogramsService } from './getprograms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programsTask';

  smartphone: any = [];
  constructor(private _GetprogramsService:GetprogramsService)
  {
    _GetprogramsService.getSmartphone()
    .subscribe(data => {
      console.log(data);
    });
  }

  // getSmartphones() {
  //   this._GetprogramsService.getSmartphone()
  //     .subscribe(data => {
  //       // for (const d of (data as any)) {
  //       //   this.smartphone.push({
  //       //     name: d.name,
  //       //     price: d.price
  //       //   });
  //       // }
  //       console.log("data");
  //     });
  // }


}
