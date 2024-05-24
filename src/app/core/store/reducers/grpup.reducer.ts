import { createReducer, on } from '@ngrx/store';
import { Igroup } from '../../models/group.model';
import * as GroupActions from '../actions/group.actions';

export interface GroupState {
  group: Igroup;
}

export const initialState: GroupState = {
  group: {
    clientId: '904bc76a-cb24-45be-8e7a-d9a954b5abae',
    groupTuplesReadingLists: [
    ],
  },
};

export const groupReducer = createReducer(
  initialState,
  on(GroupActions.changeGroup, (state, action) => ({
    ...state,
    group: action.group,
  })),
  //on(GroupActions.addReadingsToGroup, (state, action) =>({...state, group:action.lisItems})),

  on(GroupActions.addReadingsToGroup, (state, { lisItems }) => {
    return {
      ...state,
      group: {
        ...state.group,
        groupTuplesReadingLists: [...state.group.groupTuplesReadingLists, lisItems]
      }
    };
  })


);
