import * as React from 'react';
import { Button as MyButton, InputNumber } from 'antd'
import { connect, DispatchProp } from 'react-redux';
import { AnyAction } from '../../node_modules/redux';
import { increment, decrement } from '../redux/actions';

export interface NewProps extends ReduxProps {
    compiler: string;
    framework: string;
}

export interface ReduxProps {
    count: number;
    user: string;
    onIncrement: () => void;
    onDecrement: () => void;
}

class Test extends React.Component<NewProps, {}> {

    render() {
        const { compiler, framework, count, user, onDecrement, onIncrement } = this.props
        return (
            <div>
                <h1>Hello from { compiler } and { framework }!</h1>
                <MyButton>我的</MyButton>
                <InputNumber></InputNumber>
                真是牛逼哈哈哈
                <div>草拟吗，牛逼？？？</div>
                <div className="ui">呵呵</div>
                <h1>{ count }</h1>
                <MyButton onClick={ onIncrement }>加一</MyButton>
                <MyButton onClick={ onDecrement }>减一</MyButton>
                <p>{ user }</p>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)