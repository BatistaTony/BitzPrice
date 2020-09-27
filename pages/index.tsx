//import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Prices from "../components/prices";
import { IMoney } from "../components/types";
import { Fragment } from "react";

interface IProps {
  bpi: {
    USD: IMoney;
    GBP: IMoney;
    EUR: IMoney;
  };
}

export default function Index({ bpi }: IProps) {
  return (
    <Fragment>
      {bpi ? (
        <Layout>
          <h1>Welcome to Bitzprice</h1>
          <p>Check bitcoin rate</p>
          <Prices bpi={bpi} />
        </Layout>
      ) : (
        <h1>Problema with internet COnexion</h1>
      )}
    </Fragment>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};
