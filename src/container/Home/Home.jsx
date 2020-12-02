// Libraries
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Style CSS
import "./Home.css";

// Pages
import Youtube from "../pages/Youtube/Youtube";
import Produk from "../pages/Produk/Produk";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";
import Hooks from "../pages/Hooks/Hooks";

export const RootContext = createContext();
// const Provider = RootContext.Provider;

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <ul className="navbar">
            <li>
              <Link to="/">Blog Post</Link>
            </li>
            <li>
              <Link to="/produk">Produk</Link>
            </li>
            <li>
              <Link to="/youtube">Youtube</Link>
            </li>
            <li>
              <Link to="/lifecyclecomp">Life Cycle Component</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
          </ul>

          <Route path="/" exact component={BlogPost} />
          <Route path="/produk" component={Produk} />
          <Route path="/youtube" component={Youtube} />
          <Route path="/lifecyclecomp" component={LifeCycleComp} />
          <Route path="/detail-post/:postId" component={DetailPost} />
          <Route path="/hooks" component={Hooks} />
        </Fragment>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
