import { createAction, props } from "@ngrx/store";
import { IgroupQuote } from "../../models/quote.model";
import { Igroup } from "../../models/group.model";

export const loadResponses=createAction('[quote] Load Responses',props<{group:Igroup}>())
export const loadResponsesSuccess=createAction('[quote] Load Responses Success', props<{responses:IgroupQuote}>())
export const loadResponsesFailed = createAction('[quote] Load Responses Failed', props<{ error: string }>());
