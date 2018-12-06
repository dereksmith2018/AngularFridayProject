import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-weather-update',
  templateUrl: './weather-update.component.html',
  styleUrls: ['./weather-update.component.css']
})
export class WeatherUpdateComponent  {
  // implements OnDestroy
  summit$: FirebaseListObservable<any[]>;
  snowboarders$; 
  // summit: any[];
  // subscription: Subscription;

  constructor(db: AngularFireDatabase){
    this.summit$ = db.list('/summit');
    this.snowboarders$ = db.object('/snowboarders/1')
    // this.subscription = db.list('/summit')
    // .subscribe(summit=>{
    //   this.summit = summit;
    //   console.log(this.summit)
    // })
    
  }
  add(summit: HTMLInputElement){
    this.summit$.push(summit.value);
    summit.value = "";
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe;
  // }
}
