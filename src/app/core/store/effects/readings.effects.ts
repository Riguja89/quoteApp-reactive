import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ReadingsService } from "../../services/readings.service";
import * as QuoteActions from '../actions/quote.actions'
import { catchError, map, merge, mergeMap, of } from "rxjs";

@Injectable()
export class ReadingsEffects{
  loadReadings$= createEffect(()=>
  this.actions$.pipe(
    ofType(QuoteActions.loadReadings),
    mergeMap(()=>
    this.readingsService.getReadings().pipe(
      map((readings)=>QuoteActions.loadReadingsSuccess({readings})),
      catchError((error)=>{
        return of(QuoteActions.loadReadingsFailed({error}))
      })
    )
    )
  )
  )
constructor(private readonly actions$: Actions,private readonly readingsService: ReadingsService ){}
}
