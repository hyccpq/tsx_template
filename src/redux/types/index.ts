import { Action } from "../actions";

export interface Reducers<T> {
	(state: T, action: Action): T;
}
