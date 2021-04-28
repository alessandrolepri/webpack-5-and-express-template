import React from "react";
import ReactDOM from 'react-dom';

import "@babel/polyfill";

import * as serviceWorker from "./serviceWorker";

import "./module.scss";
import "./style/style.scss";

import ReactImg from "../assets/react.jpg";

class App extends React.Component {
    render() {
        return (
            <div>Hello World
                <img src={ReactImg} alt="REACT APP" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();