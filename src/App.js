import logo from './logo.svg';
import './App.css';
import Func_example from './components/Func_example/Func_example.jsx';
import Class_example from "./components/Class_example/Class_example";
import Button from "./components/Button/Button";
import React from "react";
import Text from "./components/Text/Text.jsx";


class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.state = {
            isFunc: false,
            name: "Change",
            title: "Class component"
        };
    }

    handleBtnClick() {
        let isFunc = this.state.isFunc;
        let title = this.state.title;
        this.setState({isFunc: !isFunc, title:  isFunc? 'Func component' : 'Class component' })
    }

    render() {
        const isFunc = this.state.isFunc;
        let title = this.state.title;
        return (
            <div className="App-header">
                {isFunc && <Func_example title={title}/>}
                {!isFunc && <Class_example title={title}/>}
                <Button/>
                <Text name={this.state.name} onClick={this.handleBtnClick}/>
            </div>
        )
    }

}

export default App;
