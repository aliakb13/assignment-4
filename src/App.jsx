import Table from "./Table";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
  const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}&symbols=CAD,IDR,JPY,CHF,EUR,USD`;
  // const test = {
  //   test: "test",
  // };

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        const { rates } = resData;
        setData(rates);
      });
  }, []);

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
