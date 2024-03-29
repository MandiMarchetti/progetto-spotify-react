import React, { useState } from "react";
import "../App.css";
import Queen3 from "../shared/images/Queen_Another.jpg";
import Queen2 from "../shared/images/Queen_Don't stop.jpg";
import Queen1 from "../shared/images/Queen_bohemia.jpg";
import Queen4 from "../shared/images/Queen_under.jpg";
import Katy1 from "../shared/images/Katy_hot1.jpg";
import Katy2 from "../shared/images/katy_kissed2.jpg";
import Katy3 from "../shared/images/katy_las2 e 3.jpg";
import Eminem1 from "../shared/images/eminem 1 e 2.jpg";
import Eminem2 from "../shared/images/eminem 3 e 4.jpg";
import AlbumCard from "./AlbumCard";
import { BookFill, HouseFill } from "react-bootstrap-icons";

const SidebarVertical = () => {
  const [list, setList] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  const searchFunctions = async (event) => {
    event.preventDefault();
    if (searchQuery.length > 2) {
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        });
        if (response.ok) {
          const { data } = await response.json();
          setList(data);
        } else {
          throw new Error("error in search");
        }
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  return (
    <div className="row m-0 w-100">
      <nav className="col col-2 navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
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
                    <HouseFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#region">
                    <BookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <form className="input-group mt-3" onSubmit={searchFunctions}>
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={searchQuery}
                      onChange={(e) => setsearchQuery(e.target.value)}
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
          <div>
            <a href="/#region">Cookie Policy</a> |<a href="#region"> Privacy</a>
          </div>
        </div>
      </nav>
      <div className="col-8 offset-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-block">
            <div className="d-flex gap-2 justify-content-around w-100 pt-4">
              <a href=" ">TRENDING</a>
              <a href=" ">PODCAST</a>
              <a href=" ">MOODS AND GENRES</a>
              <a href=" ">NEW RELEASES</a>
              <a href=" ">DISCOVER</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10">
              {list.length > 0 && (
                <div id="searchResults">
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                    {list.map((item) => (
                      <AlbumCard info={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="rock">
                <h2>Rock Classics</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  <div className="col text-center">
                    <img src={Queen1} alt="Album1" />
                    <p>Track: "Bohemian Rhapsod..." Artist: Queen</p>
                  </div>
                  <div className="col text-center">
                    <img src={Queen2} alt="Album1" />
                    <p>Track: Track: "Don't Stop Me No..." Artist: Queen</p>
                  </div>
                  <div className="col text-center">
                    <img src={Queen3} alt="Album1" />
                    <p>Track: "Another One Bite..." Artist: Queen</p>
                  </div>
                  <div className="col text-center">
                    <img src={Queen4} alt="Album1" />
                    <p>Track: "Under Pressure ..." Artist: Queen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                  <div className="col text-center">
                    <img src={Katy1} alt="Album1" />
                    <p>Track: "Hot N Cold" Artist: Katy Perry</p>
                  </div>
                  <div className="col text-center">
                    <img src={Katy2} alt="Album1" />
                    <p>Track: "I Kissed A Girl" Artist: Katy Perry</p>
                  </div>
                  <div className="col text-center">
                    <img src={Katy3} alt="Album1" />
                    <p>Track: "Last Friday Nigh..." Artist: Katy Perry</p>
                  </div>
                  <div className="col text-center">
                    <img src={Katy3} alt="Album1" />
                    <p>Track: "Firework" Artist: Katy Perry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  <div className="col text-center">
                    <img src={Eminem1} alt="Album1" />
                    <p>Track: "Love The Way You..." Artist: Eminem</p>
                  </div>
                  <div className="col text-center">
                    <img src={Eminem1} alt="Album1" />
                    <p>Track: "Not Afraid" Artist: Eminem</p>
                  </div>
                  <div className="col text-center">
                    <img src={Eminem2} alt="Album1" />
                    <p>Track: "Without Me" Artist: Eminem</p>
                  </div>
                  <div className="col text-center">
                    <img src={Eminem2} alt="Album1" />
                    <p>Track: "Superman" Artist: Eminem</p>
                  </div>
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
