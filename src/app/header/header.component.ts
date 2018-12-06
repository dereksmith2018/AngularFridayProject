import { Component, OnInit } from '@angular/core';
import { WeatherUpdateComponent } from '../weather-update/weather-update.component'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}