import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Data;
  now = moment().format('LLLL');  // moment Js
  day = moment().format('ddd, LT');
  userInput: string = '';
  message;


  constructor(private http: HttpClient) { }

  days() {
    moment().format('ddd, LT');
    setInterval(this.days, 1000)

  }

  //Get weather function
  getWeather() {
    if (this.userInput == null) {
      alert('Enter City name')

    }
    else {
      let weatherAPi = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.userInput + '&APPID=d37a62076c5d10716ae0a27b849bc36c';
      // &units=metric
      console.log(this.userInput)

      this.Data = this.http.get(weatherAPi).subscribe(data => {
        this.Data = data;
        console.log(this.Data);
      });
    }
  }

  ngOnInit() {
    // this.getWeather();
  }

}
