import React from "react";
import { Game } from "./Game";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { gameReducer } from "./game/reducer";

const store = createStore(gameReducer);

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
