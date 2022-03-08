import { createAction, props } from '@ngrx/store';
import { CandidateDto } from 'src/assets/types';

export const addCandidate = createAction(
    '[Candidate] Add',
    props<{ candidates: CandidateDto[] }>(),
);
export const addCandidateSuccess = createAction('[Candidate] Add success',);

export const updateCandidate = createAction(
    '[Candidate] Update',
    props<{ candidates: CandidateDto[] }>(),
);
export const updateCandidateSuccess = createAction('[Candidate] Update Success');

export const removeCandidate = createAction('[Candidate] Remove');
export const removeCandidateSuccess = createAction('[Candidate] Remove Success');

export const failure = createAction('[Candidate] Failure');
