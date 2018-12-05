import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-weather-update',
  templateUrl: './weather-update.component.html',
  styleUrls: ['./weather-update.component.css']
})
export class WeatherUpdateComponent  {
  summit: any[];
  constructor(db: AngularFireDatabase){
    db.list('/summit')
    .subscribe(summit=>{
      this.summit = summit;
      console.log(this.summit)
    })
  }

}
