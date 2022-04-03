import React, {Component} from "react";
import data from "../components/data.json"
import Swal from "sweetalert2"
import Options from "../options/story"

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {position: 0, history: [], selections: ''};
    }


    componentDidUpdate(Pp, Ps){
        if (Ps.position !== this.state.position) {
            this.state.history.unshift(this.state.selections)
        }
    }

    switchByClick = (e) => {
        const id = e.target.id;
        if (this.state.position >= 7) {
            Swal.fire('The story ended, well done!!')
            } else if (id === 'B' && this.state.selections === 'A') {
                this.setState({
                    position: this.state.position + 3,
                    selections: 'B',
                });
            } else if ((id === 'A' && this.state.selections === "A") || id === "B") {
                this.setState({
                    position: this.state.position + 2,
                    selections: this.state.selections === "A" ? "A" : "B",
            });
        } else if (id === 'A' && this.state.selections !== 'A') {
            this.setState({
                position: this.state.position + 1,
                selections: "A",
            });
        }
        };

    render(){
        return(
            <div className="layout">
                <h1 className="historia">{data[this.state.position].historia}</h1>
                <Options
                switchByClick={this.switchByClick}
                position={this.state.position}
                />
                <div className="recordatorio">
                    <h3>Selección anterior: {this.state.selections}</h3>
                    <h4>Historial de opciones elegidas: </h4>
                    <ul>{this.state.history.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}</ul>
                </div>
            </div>
        );
    }
}

export default Main;