import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/add">
          <AddContact />
        </Route>

        <Route path="/edit/:id">
          <EditContact />
        </Route>

        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
