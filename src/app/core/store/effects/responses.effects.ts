import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ResponsesActions from '../actions/response.actions'
import { catchError, map, mergeMap, of } from "rxjs";
import { ResponsesService } from "../../services/responses.service";
import * as ResponseActions from '../actions/response.actions'

@Injectable()
export class ResponsesEffects {

  loadResponses$= createEffect(()=>
    this.actions$.pipe(
      ofType(ResponsesActions.loadResponses),
      mergeMap((action)=>
      this.responseService.getResponses(action.group).pipe(
        map((responses)=>ResponseActions.loadResponsesSuccess({responses})),
        catchError((error)=>{
          return of(ResponseActions.loadResponsesFailed({error}))
        })
      )
      )
    )
    )
  constructor(private readonly actions$: Actions,private readonly responseService: ResponsesService ){}

}
