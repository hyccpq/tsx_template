import * as React from 'react';
import { Button as MyButton, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { increment, decrement, EnthusiasmAction, get_user } from '../redux/actions';
import { AppState } from '../redux';

export interface NewProps {
	compiler: string;
	framework: string;
}

export interface ReduxProps {
	count: number;
	user: string;
	userInf: any;
}

export interface ActionsProps {
	increment: () => {};
	decrement: () => {};
	get_user: () => void;
}

type AllProps = NewProps & ReduxProps & ActionsProps;

const mapStateToProps = (state: AppState) => {
	return {
		count: state.counter,
		user: state.user,
		userInf: state.userInf
	};
};

const mapDispatchToProps: ActionsProps = {
	increment,
	decrement,
	get_user
};

class App extends React.Component<AllProps, {}> {
	render() {
		const { compiler, framework, count, user, userInf, decrement, increment, get_user } = this.props;
		let data: string = ''
		if(userInf.error){
			data = userInf.error	
		} else if (userInf.isFetching) {
			data = 'Loading!'
		} else {
			data = userInf.user
		}
		return (
			<div>
				<h1>
					Hello from {compiler} and {framework}!
				</h1>
				<MyButton>我的</MyButton>
				<InputNumber />
				真是牛逼哈哈哈
				<div>草拟吗，牛逼？？？</div>
				<div className="ui">呵呵</div>
				<h1>{count}</h1>
				<MyButton onClick={() => increment()}>加一</MyButton>
				<MyButton onClick={() => decrement()}>减一</MyButton>
				<p>{ user }</p>
				<h2>{ data }</h2>
				<MyButton onClick={() => get_user()} type='danger' loading={userInf.isFetching}>获取用户</MyButton>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App as React.ComponentType<NewProps>);
