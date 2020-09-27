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

  render() {
    let list:
      | React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLSpanElement>,
          HTMLSpanElement
        >
      | any = [];

    if (this.state.corruncy === "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.USD.description}{" "}
          <span className="badge badge-primary">{this.props.bpi.USD.code}</span>{" "}
          : <strong>{this.props.bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.corruncy === "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.GBP.description}{" "}
          <span className="badge badge-primary">{this.props.bpi.GBP.code}</span>{" "}
          : <strong>{this.props.bpi.GBP.rate}</strong>
        </li>
      );
    } else if (this.state.corruncy === "EUR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.EUR.description}{" "}
          <span className="badge badge-primary">{this.props.bpi.EUR.code}</span>{" "}
          : <strong>{this.props.bpi.EUR.rate}</strong>
        </li>
      );
    }

    return (
      <div className="prices">
        <ul className="list-group">{list}</ul>
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
