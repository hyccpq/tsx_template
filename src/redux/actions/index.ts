import axios from 'axios';
import * as contents from '../constans';
import { Dispatch } from 'redux';
export interface Increment {
	type: contents.INCREMENT;
}

export interface Decrement {
	type: contents.DECREMENT;
}

export interface Get_user {
	type: contents.GET_USER | contents.REQUEST_USER | contents.ERROR_USER;
	isFetching?: boolean;
	user?: {};
	error?: string;
}

export type EnthusiasmAction = Increment | Decrement | Get_user;

export const increment = (): Increment => {
	return {
		type: contents.INCREMENT
	};
};

export const decrement = (): Decrement => {
	return {
		type: contents.DECREMENT
	};
};

export const get_user = () => {
	return async (dispatch: Dispatch<EnthusiasmAction>) => {
		try {
			dispatch(request_user())
			let res = await axios.get("https://randomuser.me/api/")
			dispatch(fetch_user(res.data.results[0]))
		} catch (e){
			dispatch(error_user(e.toString()))
		}
	};
};

export const fetch_user = (user:{}): Get_user => {
	return {
		type: contents.GET_USER,
		isFetching: false,
		user
	}
};

export const request_user = (): Get_user => {
	return { 
		type: contents.REQUEST_USER,
		isFetching: true
	}
};

export const error_user = (error: string): Get_user => {
	return { 
		type: contents.ERROR_USER,
		isFetching: false,
		error
	}
};