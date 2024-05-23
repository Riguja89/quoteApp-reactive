import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { HttpService } from './generals/http.service';
import { ApiToReadinsMapper } from '../mappers/api-to-readings.mapper';
import { IReading } from '../models/reading.model';
import { URL_RESOURCES } from '../resources/url.resources';



@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToReadinsMapper
  ) { }
  getReadings(): Observable<IReading[]> {
    const url=URL_RESOURCES.reading;
    return this.httpService.get<IReading[]>(url)
    .pipe(
      map((result) => this.mapper.map(result))
    );
  }
}
