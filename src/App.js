import "./App.css";
import AppContext from "./Components/AppContext/AppContext";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <AppContext>
          <Pages/>
       </AppContext>
      </BrowserRouter>
    </h1>
  );
}

export default App;
