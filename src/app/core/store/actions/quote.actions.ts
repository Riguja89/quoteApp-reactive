import { createAction, props } from "@ngrx/store";
import { IReading } from "../../models/reading.model";

export const loadReadings=createAction('[quote] Load Readings')
export const loadReadingsSuccess=createAction('[quote] Load Readings Success', props<{readings:IReading[]}>())
export const loadReadingsFailed = createAction('[quote] Load Readings Failed', props<{ error: string }>());
