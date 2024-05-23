import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { ReadingsState } from "../reducers/readings.reducer";

export const selectReadingState=(state: AppState)=>state.readings;

export const selectReadings=createSelector(
  selectReadingState,
  (state: ReadingsState)=>state.readings
)
