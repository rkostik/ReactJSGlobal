import React from 'react';
import '../Func_example/Func_example.css';

class Class_example extends React.Component {
    render() {
        return (
            <div>
                <input className="main" placeholder={this.props.title}>
                </input>
            </div>
        )
    }
}

export default Class_example