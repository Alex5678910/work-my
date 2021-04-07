import React, {Component} from 'react';
import './index.css'
import "antd/dist/antd.css";
import {Demo} from "./TreeSelect";

class Antd extends Component {

    state = {
        valDef: [],
    };

    updateData = (value) => {
        this.setState({valDef: value})
    }

    render() {
        return (
            <div className="App">
                <h1>Привет Alex</h1>
                <Demo updateData={this.updateData}/>
                <section className={'DataInput'}>
                    {this.state.valDef}
                </section>
            </div>
        );
    }
}

export default Antd;
