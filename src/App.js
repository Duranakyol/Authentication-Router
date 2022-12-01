import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import Router from "./config/router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
