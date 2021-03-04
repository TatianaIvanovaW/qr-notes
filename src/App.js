import "./App.css";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import QrCode from "./QrCode";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:code" component={QrCode} />
      </Switch>
    </div>
  );
}

export default App;
