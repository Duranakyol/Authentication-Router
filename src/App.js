import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import Router from "./config/router";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CssBaseline />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
