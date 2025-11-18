import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true; // cleanup flag
    const controller = new AbortController();

    async function fetchPrice() {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
          { signal: controller.signal }
        );
        const data = await res.json();

        if (isMounted) {
          setPrice(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to fetch price");
        }
      }

      if (isMounted) setLoading(false);
    }

    fetchPrice();

    // Cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [currency]); // runs when currency changes

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
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
