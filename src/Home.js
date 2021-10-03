import React from "react";
import "./App.css";
import Header from "./components/Header";
import Leftside from "./components/Leftside";
import Post from "./components/Post";
import Rightside from "./components/Rightside";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            <Post />
            <Leftside />
          </div>
          <div className="col-md-4 ">
            <Rightside />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
