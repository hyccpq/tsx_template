import { Reducers } from "../types";

const user: Reducers<string> = (state = 'kalec', action) => {
	switch (action.type) {
		
		default:
			return state;
	}
};

export default user;