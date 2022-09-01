import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./routes/RoutesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
