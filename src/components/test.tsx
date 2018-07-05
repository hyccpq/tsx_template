import * as React from 'react';
import { Button as MyButton } from 'antd'

export interface NewProps {
    compiler: string;
    framework: string;
}

export default class Test extends React.Component<NewProps> {
    constructor (props: NewProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello from { this.props.compiler } and { this.props.framework }!</h1>
                <MyButton>我的</MyButton>
                真是牛逼哈哈哈
                <div>草拟吗，牛逼？？？</div>
                <div className="ui">呵呵</div>

            </div>

        )
    }
}