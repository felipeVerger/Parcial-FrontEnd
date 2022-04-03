import React, {Component} from "react";
import data from "../components/data.json"


class Options extends Component {
    render(){
        return(
        <div className="opciones">
            <div className="opcion">
                <button id="A" className="botones" onClick={this.props.switchByClick}>A</button>
                <h2>{data[this.props.position].opciones.a}</h2>
            </div>
            <div className="opcion">
                <button id="B" className="botones" onClick={this.props.switchByClick}>B</button>
                <h2>{data[this.props.position].opciones.b}</h2>
            </div>
        </div>
        )
    }
}

export default Options;