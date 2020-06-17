import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Prices from "../components/prices";

export default function Index(props) {
  return (
    <Layout>
      <h1>Welcome to Bitzprice</h1>
      <p>Check bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </Layout>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};
