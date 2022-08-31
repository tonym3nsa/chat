import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./routes/RoutesList";

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