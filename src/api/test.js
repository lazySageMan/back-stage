import React from "react";
import ReactDOM from "react-dom";

const productsInitState = { products: [] };
const ordersInitState = { orders: [] };

const ContextStore = React.createContext({
  products: []
});

function combineDispatchs(dispatchs) {
  return function(obj) {
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](obj);
    }
  };
}

function productsReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return Object.assign({}, state, {
        products: state.products.concat({ id: state.products.length })
      });
    default:
      return state;
  }
}

function ordersReducer(state, action) {
  switch (action.type) {
    case "ADD_ORDER":
      return Object.assign({}, state, {
        orders: state.orders.concat({ id: state.orders.length })
      });
    default:
      return state;
  }
}

function Application() {
  const [pState, pDispatch] = React.useReducer(
    productsReducer,
    productsInitState
  );
  const [oState, oDispatch] = React.useReducer(ordersReducer, ordersInitState);

  return (
    <ContextStore.Provider
      value={{
        orders: oState.orders,
        products: pState.products,
        dispatch: combineDispatchs([pDispatch, oDispatch])
      }}
    >
      <MyApp />
    </ContextStore.Provider>
  );
}

function Products() {
  const { products, dispatch } = React.useContext(ContextStore);
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>PRODUCT - {product.id}</div>
      ))}
      <button onClick={() => dispatch({ type: "ADD_PRODUCT" })}>
        ADD PRODUCT
      </button>
    </div>
  );
}

function Orders() {
  const { orders, dispatch } = React.useContext(ContextStore);
  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>ORDER - {order.id}</div>
      ))}
      <button onClick={() => dispatch({ type: "ADD_ORDER" })}>ADD ORDER</button>
    </div>
  );
}

function MyApp() {
  return (
    <React.Fragment>
      <Products />
      <Orders />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);