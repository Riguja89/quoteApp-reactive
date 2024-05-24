import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { ReadingsState } from "../reducers/readings.reducer";
import { state } from "@angular/animations";
import { GroupState } from "../reducers/grpup.reducer";
import { ResponsesState } from "../reducers/responses.reducer";

export const selectReadingState=(state: AppState)=>state.readings;
export const selectGroupState=(state:AppState)=>state.group;
export const selectResponsesState=(state:AppState)=>state.responses;

export const selectReadings=createSelector(
  selectReadingState,
  (state: ReadingsState)=>state.readings
)

export const selectGroup=createSelector(
  selectGroupState,
  (state: GroupState)=>state.group
)

export const selectResponses=createSelector(
  selectResponsesState,
  (state: ResponsesState)=>state.responses
)

