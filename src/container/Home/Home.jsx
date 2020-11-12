// Libraries
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Style CSS
import "./Home.css";

// Pages
import Youtube from "../pages/Youtube/Youtube";
import Produk from "../pages/Produk/Produk";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {}

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
          </ul>

          <Route path="/" exact component={BlogPost} />
          <Route path="/produk" component={Produk} />
          <Route path="/youtube" component={Youtube} />
          <Route path="/lifecyclecomp" component={LifeCycleComp} />
          <Route path="/detail-post/:postId" component={DetailPost} />
        </Fragment>
      </Router>
    );
  }
}

export default Home;
