import { useEffect, useReducer } from "react";

const initialState = {
  price: null,
  loading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: "" };
    case "SUCCESS":
      return { price: action.payload, loading: false, error: "" };
    case "ERROR":
      return { price: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchRate() {
      dispatch({ type: "LOADING" });

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        const price = data.bitcoin[currency.toLowerCase()];

        if (isMounted) {
          dispatch({ type: "SUCCESS", payload: price });
        }
      } catch (err) {
        if (isMounted) {
          dispatch({ type: "ERROR", payload: "Failed to fetch price" });
        }
      }
    }

    fetchRate();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [currency]);

  return state; // { price, loading, error }
}
