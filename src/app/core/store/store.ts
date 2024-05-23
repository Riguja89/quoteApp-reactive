import { ActionReducer,Action } from "@ngrx/store";
import { ReadingsState, readingsReducer } from "./reducers/readings.reducer";
import { ReadingsEffects } from "./effects/readings.effects";


export interface AppState{
  readings: ReadingsState
}

export interface AppStore {
  readings: ActionReducer<ReadingsState, Action>
}

export const appStore: AppStore={
  readings:readingsReducer
}

//definicion de efectos

export const appEffects =[ReadingsEffects]
