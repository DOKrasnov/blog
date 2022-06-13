import React from "react";
import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <dir className="navbar-nav mr-auto">
            <a className="nav-link" href="">
              HTML
            </a>
            <a className="nav-link" href="">
              CSS
            </a>
            <a className="nav-link" href="">
              Java Script
            </a>
            <a className="nav-link" href="">
              Bootstrap
            </a>
            <a className="nav-link" href="">
              React
            </a>
            <a className="nav-link active" href="">
              Blog
            </a>
          </dir>
        </div>
      </nav>
    );
  }
}
