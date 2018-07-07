import { INCREMENT, DECREMENT } from '../constans/index';

export interface Action {
	type: string;
	payload?: any;
}

export const increment = (): Action => {
	return {
		type: INCREMENT
	};
};

export const decrement = (): Action => {
	return {
		type: DECREMENT
	};
};
