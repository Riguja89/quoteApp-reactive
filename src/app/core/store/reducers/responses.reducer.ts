import { createReducer, on } from "@ngrx/store";
import { IgroupQuote } from "../../models/quote.model";
import * as ResponsesActions from '../actions/response.actions'

export interface ResponsesState {
  responses:IgroupQuote;
  loading:boolean;
  error:String;
}
export const initialState: ResponsesState={
  responses:{
    nameClien:'',
    totalGroup:0,
    discountGroup:0,
    resumeList:[]
  },
  loading:false,
  error:''
}

export const responsesReducer= createReducer(
  initialState,
  on(ResponsesActions.loadResponses, state =>({...state, loading: true})),
  on(ResponsesActions.loadResponsesSuccess, (state, action) =>({...state, responses:action.responses}))
)
