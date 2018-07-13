import { combineReducers, Reducer } from 'redux'

import counter from './reducers/counter'
import user from './reducers/user'
import userInf from './reducers/get_user';

export interface AppState {
    counter: number;
    user: string;
    userInf: {}
}

export const reducers: Reducer<AppState> =  combineReducers<AppState>({
    counter,
    user,
    userInf
})