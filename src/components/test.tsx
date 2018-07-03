import * as React from 'react';

export interface NewProps {
    compiler: string;
    framework: string;
}

export default class Test extends React.Component<NewProps> {
    render() {
        return (
            <h1>Hello from { this.props.compiler } and { this.props.framework }!</h1>
        )
    }
}