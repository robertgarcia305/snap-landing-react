import React from "react";
import ReactDOM from "react-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="desktop-nav-wrap">
        <div className="left-nav-wrap">
          <div className="logo-nav-wrap">
            <img src="img/logo.svg"></img>
          </div>

          <ul className="main-menu-nav-wrap">
            <div className="nav-block">
              <div className="li-wrap">
                <li>
                  <a href="#">Features</a>
                </li>
                <img src="img/icon-arrow-down.svg"></img>
              </div>
              <ul className="features-sub">
                <div>
                  <img src="img/icon-todo.svg"></img>
                  <li>
                    <a href="#">To Do List</a>
                  </li>
                </div>
                <div>
                  <img src="img/icon-calendar.svg"></img>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                </div>
                <div>
                  <img src="img/icon-reminders.svg"></img>
                  <li>
                    <a href="#">Reminders</a>
                  </li>
                </div>
                <div>
                  <img src="img/icon-planning.svg"></img>
                  <li>
                    <a href="#">Planning</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="nav-block">
              <div className="li-wrap">
                <li>
                  <a href="#">Company</a>
                </li>
                <img src="img/icon-arrow-down.svg"></img>
              </div>
              <ul className="company-sub">
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="nav-block">
              <li>
                <a href="#">Careers</a>
              </li>
            </div>
            <div className="nav-block">
              <li>
                <a href="#">About</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="right-nav-wrap">
          <ul>
            <li>
              <a href="#" className="login">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-nav-wrap">
        <div className="top-nav">
          <div className="mobile-logo-wrap">
            <img src="img/logo.svg"></img>
          </div>
          <div className="nav-controls-wrap">
            <img
              id="hamb-icon"
              className="hamb-icon"
              src="img/icon-menu.svg"
              onClick={props.toggle}
            ></img>
          </div>
        </div>
        <div
          className={`bottom-nav ${props.display ? "show" : "hide"}`}
          id="nav"
        >
          <div className="x-wrap">
            <img
              id="x-icon"
              className="x-icon"
              src="img/icon-close-menu.svg"
              onClick={props.toggle}
            ></img>
          </div>
          <ul className="top-menu">
            <div className="nav-block">
              <div
                className="mobile-li-wrap"
                id="features"
                onClick={() => {
                  props.checkDisplay("features");
                }}
              >
                <li>
                  <a href="#">Features</a>
                </li>
                <img id="arrowDown" src="img/icon-arrow-down.svg"></img>
              </div>
              <ul
                className="mobile-features-sub"
                id="featuresDrop"
                style={{ display: props.features ? "block" : "none" }}
              >
                <div>
                  <img src="img/icon-todo.svg"></img>
                  <li>
                    <a href="#">To Do List</a>
                  </li>
                </div>
                <div>
                  <img src="img/icon-calendar.svg"></img>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                </div>
                <div>
                  <img src="img/icon-reminders.svg"></img>
                  <li>
                    <a href="#">Reminders</a>
                  </li>
                </div>
                <div>
                  <img src="img/icon-planning.svg"></img>
                  <li>
                    <a href="#">Planning</a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="nav-block">
              <div
                className="mobile-li-wrap"
                id="company"
                // here goes the on click
                onClick={() => {
                  props.checkDisplay("company");
                }}
              >
                <li>
                  <a href="#">Company</a>
                </li>
                <img src="img/icon-arrow-down.svg"></img>
              </div>
              <ul
                className="mobile-company-sub"
                id="mobile-company-sub"
                style={{ display: props.company ? "block" : "none" }}
              >
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="nav-block">
              <li>
                <a href="#">Careers</a>
              </li>
            </div>
            <div className="nav-block">
              <li>
                <a href="#">About</a>
              </li>
            </div>
          </ul>
          <ul className="bottom-menu">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#" className="register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
