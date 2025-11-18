import { useState } from "react";
import useBitcoinRate from "../hooks/useBitcoinRate";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const { price, loading, error } = useBitcoinRate(currency);

  const options = currencies.map((curr) => (
    <option key={curr} value={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div style={{ marginTop: "15px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {price && !loading && (
          <p>
            1 BTC = <strong>{price} {currency}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
