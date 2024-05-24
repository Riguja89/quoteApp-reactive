import { Injectable } from "@angular/core";
import { HttpService } from "./generals/http.service";
import { ApiToResponses } from "../mappers/api-to-responses.mapper";
import { IgroupQuote } from "../models/quote.model";
import { Igroup } from "../models/group.model";
import { URL_RESOURCES } from "../resources/url.resources";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResponsesService {

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToResponses
  ) { }
  getResponses(group: Igroup): Observable<IgroupQuote> {
    const url=URL_RESOURCES.response;
    return this.httpService
    .post<Igroup>(url, JSON.stringify(group))
      .pipe(map((result) => this.mapper.map(result)));
  }

}
