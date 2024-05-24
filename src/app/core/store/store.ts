import { ActionReducer,Action } from "@ngrx/store";
import { ReadingsState, readingsReducer } from "./reducers/readings.reducer";
import { ReadingsEffects } from "./effects/readings.effects";
import { GroupState, groupReducer } from "./reducers/grpup.reducer";
import { ResponsesState, responsesReducer } from "./reducers/responses.reducer";
import { ResponsesEffects } from "./effects/responses.effects";


export interface AppState{
  readings: ReadingsState
  group:GroupState
  responses:ResponsesState
}

export interface AppStore {
  readings: ActionReducer<ReadingsState, Action>
  group: ActionReducer<GroupState,Action>
  responses: ActionReducer<ResponsesState,Action>
}

export const appStore: AppStore={
  readings:readingsReducer,
  group:groupReducer,
  responses:responsesReducer
}

//definicion de efectos

export const appEffects =[ReadingsEffects,ResponsesEffects]
