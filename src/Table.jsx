import "./Table.css";

export default function Table({ exchangeData }) {
  const { CAD, CHF, EUR, IDR, JPY, USD } = exchangeData;

  return (
    <>
      <table>
        <tr id="head-table">
          <th></th>
          <th>WE BUY</th>
          <th>EXCHANGE RATE</th>
          <th>WE SELL</th>
        </tr>
        <tr className="content">
          <td>CAD</td>
          <td>{toBuy(CAD)}</td>
          <td>{CAD}</td>
          <td>{toSell(CAD)}</td>
        </tr>
        <tr className="content">
          <td>IDR</td>
          <td>{toBuy(IDR)}</td>
          <td>{IDR}</td>
          <td>{toSell(IDR)}</td>
        </tr>
        <tr className="content">
          <td>JPY</td>
          <td>{toBuy(JPY)}</td>
          <td>{JPY}</td>
          <td>{toSell(JPY)}</td>
        </tr>
        <tr className="content">
          <td>CHF</td>
          <td>{toBuy(CHF)}</td>
          <td>{CHF}</td>
          <td>{toSell(CHF)}</td>
        </tr>
        <tr className="content">
          <td>EUR</td>
          <td>{toBuy(EUR)}</td>
          <td>{EUR}</td>
          <td>{toSell(EUR)}</td>
        </tr>
        <tr className="content">
          <td>USD</td>
          <td>{toBuy(USD)}</td>
          <td>{USD}</td>
          <td>{toSell(USD)}</td>
        </tr>
      </table>
    </>
  );
}

function toBuy(exchangeRates) {
  const buy = exchangeRates * 1.02;
  const roundFourPlace = buy.toFixed(4);
  return Number(roundFourPlace);
}

function toSell(exchageRates) {
  const sell = exchageRates * 0.98;
  const roundFourPlace = sell.toFixed(4);
  return Number(roundFourPlace);
}

function convertFourPlaces(exchageRates) {
  const roundFourPlace = exchageRates.toFixed(4);
  return Number(roundFourPlace);
}
