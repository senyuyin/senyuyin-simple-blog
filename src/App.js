import "./styles.css";
import Header from "./components/Header";
import { Content } from "./components/page/Content";
import { Footer } from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./components/page/Detail";

library.add(fab, far, fas);

function Home() {
  return (
    <div className="home">
      <Content />
    </div>
  );
}

function Article() {
  return (
    <div className="article">
      <Detail />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
