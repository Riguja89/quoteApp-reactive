import { createReducer, on } from "@ngrx/store";
import { IReading } from "../../models/reading.model";
import * as QuoteActions from '../actions/quote.actions'

export interface ReadingsState {
  readings:IReading[];
  loading:boolean;
  error:String;
}

export const initialState: ReadingsState={
  readings:[],
  loading:false,
  error:''
}

export const readingsReducer= createReducer(
  initialState,
  on(QuoteActions.loadReadings, state =>({...state, loading: true})),
  on(QuoteActions.loadReadingsSuccess, (state, action) =>({...state, readings:action.readings}))
)
