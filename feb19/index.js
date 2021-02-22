// const { createStore } = require("redux");

require("redux", function (createStore) {
  const BUY_TRADE = "BUY_TRADE";

  function buyTrade() {
    return {
      type: BUY_TRADE,
      info: "Buying trade at NSE",
    };
  }

  function buyTrades() {
    alert("buyTrades");
  }

  const initialState = {
    numOfTrades: 100000,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_TRADE:
        return {
          ...state,
          numOfTrades: state.numOfTrades - 1,
        };
      default:
        return state;
    }
  };

  const store = createStore(reducer);
  console.log(store.getState());
  const unsub = store.subscribe(() =>
    console.log("Updated state ", store.getState())
  );
  store.dispatch(buyTrade());
  unsub();
});
