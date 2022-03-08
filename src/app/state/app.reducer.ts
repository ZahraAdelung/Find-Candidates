import { createReducer, on } from '@ngrx/store';
import { CandidateDto } from 'src/assets/types';
import * as AppActions from './app.actions';

export interface State {
    candidates?: CandidateDto[];
    loading: boolean;
}

const initialState: State = {
    candidates: [],
    loading: false,
};

const _appReducer = createReducer(
    initialState,
    on(
        AppActions.addCandidate,
        (state, { candidates }) => ({ ...state, candidates, loading: true })
    )
)

export function appReducer(state: State, action: any) {
    return _appReducer(state, action);
}