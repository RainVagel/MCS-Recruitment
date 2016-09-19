/**
 * Created by rainvagel on 18.09.16.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Weather} from './weather';

@Injectable()
export class WeatherService {
  constructor (private http: Http) {}

  private weatherUrl = 'app/weather-station/weathers';

  getWeather(): Observable<Weather[]> {
    return this.http.get(this.weatherUrl).map(this.extractData());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
