import { useState, useEffect } from "react";
import Table from "./Table";
import Error from "./Error";
import "./App.css";

function App() {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
  const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}&symbols=CAD,IDR,JPY,CHF,EUR,USD`;

  async function handleFetch(url) {
    try {
      const res = await fetch(url);

      if (res.status != 200) {
        setError(true);
        return;
      }

      const data = await res.json();
      const { rates } = data;
      setData(rates);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  }

  useEffect(() => {
    handleFetch(url);
  }, []);

  if (error) {
    return <Error />;
  }

  return (
    <div id="container">
      <Table exchangeData={data} />
      <ul>
        <li>based currency is USD</li>
        <li>
          This page using{" "}
          <a href="https://currencyfreaks.com/" style={{ color: "white" }}>
            currencyfreaks.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
