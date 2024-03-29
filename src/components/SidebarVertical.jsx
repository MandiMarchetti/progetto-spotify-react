import "../App.css";
import React from "react";
import SearchFunctions from "./SearchFunctions";

const SidebarVertical = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-2">
          <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
            <div className="container flex-column align-items-start">
              <a className="navbar-brand" href="index.html">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Spotify Logo" width="131" height="40" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul className="classe_lista">
                    <li>
                      <a className="nav-item nav-link d-flex align-items-center" href="#region">
                        <i className="bi bi-book-fill"></i>&nbsp; Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-item nav-link d-flex align-items-center" href="#region">
                        <i className="bi bi-book-fill"></i>&nbsp; Your Library
                      </a>
                    </li>
                    <li>
                      <form className="input-group mt-3" onSubmit={SearchFunctions}>
                        <input
                          type="text"
                          className="form-control"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                            GO
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-btn">
              <button className="btn signup-btn" type="button">
                Sign Up
              </button>
              <button className="btn login-btn" type="button">
                Login
              </button>
              <a href="/#region">Cookie Policy</a> |<a href="#region"> Privacy</a>
            </div>
          </nav>
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <a href=" ">TRENDING</a>
                <a href=" ">PODCAST</a>
                <a href=" ">MOODS AND GENRES</a>
                <a href=" ">NEW RELEASES</a>
                <a href=" ">DISCOVER</a>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="searchResults" style={{ display: "none" }}>
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarVertical;
