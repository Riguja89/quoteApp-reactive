import { createAction, props } from "@ngrx/store";
import { Igroup, IgrupeReadings } from "../../models/group.model";

export const changeGroup=createAction('[quote] Change Group Success', props<{group:Igroup}>())
export const addReadingsToGroup=createAction('[quote] AddReadings Group', props<{lisItems:IgrupeReadings}>())
