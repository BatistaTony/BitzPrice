import { Component } from "react";
import { IMoney } from "./types";

interface IProps {
  bpi: {
    USD: IMoney;
    GBP: IMoney;
    EUR: IMoney;
  };
}

class Prices extends Component<IProps> {
  state = {
    corruncy: "USD",
  };

  destruturingAll = (): IMoney => {
    if (this.state.corruncy === "USD") {
      return {
        description: this.props.bpi.USD.description,
        code: this.props.bpi.USD.code,
        rate: this.props.bpi.USD.rate,
      };
    } else if (this.state.corruncy === "GBP") {
      return {
        description: this.props.bpi.GBP.description,
        code: this.props.bpi.GBP.code,
        rate: this.props.bpi.GBP.rate,
      };
    } else if (this.state.corruncy === "EUR") {
      return {
        description: this.props.bpi.EUR.description,
        code: this.props.bpi.EUR.code,
        rate: this.props.bpi.EUR.rate,
      };
    }
  };

  render() {
    let { description, code, rate } = this.destruturingAll();

    return (
      <div className="prices">
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {description}{" "}
            <span className="badge badge-primary">{code}</span> :{" "}
            <strong>{rate}</strong>
          </li>
        </ul>
        <br />
        <select
          onClick={(e: any) => this.setState({ corruncy: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
