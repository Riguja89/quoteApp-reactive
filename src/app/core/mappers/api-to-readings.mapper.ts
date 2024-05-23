import { Injectable } from "@angular/core";
import { IReading } from "../models/reading.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToReadinsMapper {
  map(payload: any[]): IReading[] {
    return payload.map((item) => (
      {
        id: item.readingId,
        title: item.title,
        author: item.author,
        originalPrice: item.originalPrice,
        type: item.type,
      }
    ))
  }
}
