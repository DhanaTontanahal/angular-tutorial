const { createStore } = require("redux");

const BUY_TRADE = "BUY_TRADE";

const DEPOSIT = "DEPOSIT";

function depositAmount() {
  return {
    type: DEPOSIT,
    info: "Deposit the amount to Bank",
  };
}

function buyTrade() {
  return {
    type: BUY_TRADE,
    info: "Buying a trade",
  };
}

// const intialState = {
//   numOfTrades: 10000,
// };

const intialState = {
  amount: 10000,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        amount: state.amount + 10,
      };
    case "BUY_TRADE":
      return {
        ...state,
        numOfTrades: state.numOfTrades - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Inital State of my trade application : ", store.getState());
store.subscribe(() => console.log("Subscribed to the store"));
//User clicked a button on User interface "Buy a Trade"
// store.dispatch(buyTrade());
//=====================================

//USer clicks on Deposit button on UI
store.dispatch(depositAmount());

//send the 10000+10 ==> server from the store

console.log("Final State of my trade application : ", store.getState());

//action
// UI event
//click
//event handler
//function

//action creator-->function

//store--> 10K IBM shares

// {
//     type:'BUY_TRADE',
//     payload:"10 IBM shares"
// }

//reducer
// function
// initial state , action ====> return new state after doing some logic
//based on the action , he does the changes in the state of the app and then return the new state
//10K - 10 --> update store

//store
//centralized place
//data is present
//getState()
//application : to integrate
//subscribe()
// dispatch()
