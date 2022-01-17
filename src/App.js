import "./App.css";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Application from "./pages/Application";
import Comment from "./components/Comment";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>

          <Route exact path="/comments">
            <Comment />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route exact path="/application">
            <Application />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
