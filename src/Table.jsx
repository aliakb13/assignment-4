import "./Table.css";

export default function Table({ exchangeData }) {
  const currencyList = ["CAD", "CHF", "EUR", "IDR", "JPY", "USD"];
  return (
    <>
      <table>
        <thead>
          <tr id="head-table">
            <th></th>
            <th>WE BUY</th>
            <th>EXCHANGE RATE</th>
            <th>WE SELL</th>
          </tr>
        </thead>
        <tbody>
          {currencyList.map((currency, index) => {
            return (
              <tr key={index} className="content">
                <td>{currency}</td>
                <td>{toBuy(exchangeData[currency])}</td>
                <td>{exchangeData[currency]}</td>
                <td>{toSell(exchangeData[currency])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function toBuy(exchangeRates) {
  return (exchangeRates * 1.02).toFixed(4);
}

function toSell(exchageRates) {
  return (exchageRates * 0.98).toFixed(4);
}
