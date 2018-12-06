import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,} from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-weather-update',
  templateUrl: './weather-update.component.html',
  styleUrls: ['./weather-update.component.css']
})
export class WeatherUpdateComponent{
  // implements OnDestroy
  
  summit$: FirebaseListObservable<any[]>;
  // snowboarders$: FirebaseListObservable<any[]>; 
  // updateItem: boolean = false;
  // summitToUpdate: FirebaseListObservable<any[]>
  // summit: any[];
  // subscription: Subscription;

  constructor( private db: AngularFireDatabase){
    this.summit$ = db.list('/summit');
    // this.snowboarders$ = db.list('/snowboarders/1')
    // this.subscription = db.list('/summit')
    // .subscribe(summit=>{
    //   this.summit = summit;
    //   console.log(this.summit)
    // })
    
    
  }
  // ngOnInit(){
  //     this.summit$ = this.db.list('/summit')
  // }
  addRoute(summit: HTMLInputElement){
    this.summit$.push(summit.value);
    summit.value = "";
  }
  // addCoach(snowboarders: HTMLInputElement){
  //   this.snowboarders$.push(snowboarders.value);
  //   snowboarders.value = "";
  // }
  updateSummit(summits){
    this.db.object('/summit/' + summits.$key)
    .set(summits.$value + " Updated and Added to database")
  }
  delete(summits){
    this.db.object('/summit/' + summits.$key)
    .remove();
  }
  // editItem(event, item){
  //   this.updateItem = true;
  //   this.summitToUpdate = item
  // }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe;
  // }
}
