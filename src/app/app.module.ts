import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleImageComponent } from './title-image/title-image.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { WeatherUpdateComponent } from './weather-update/weather-update.component';
import { MapComponent } from './map/map.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleImageComponent,
    DropdownComponent,
    WeatherUpdateComponent,
    MapComponent,
    AdvertisementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
