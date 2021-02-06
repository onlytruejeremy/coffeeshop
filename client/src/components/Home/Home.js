import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
const Home = (props) => {
  const images = [
    "https://images.unsplash.com/photo-1512663827140-3ef55c96cd49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1552833755-fdb50eeb8cf1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc28lMjBtYWNoaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    `https://images.unsplash.com/photo-1579721333007-f73d08d8d669?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80`,
    "https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  ];
  return (
    <Layout>
      <div className="home__container">
        <div className="three_grid ">
          <div
            className="top__row bg__image"
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            <h2>COFFEE BREWED RIGHT</h2>
          </div>
          <div className="two__col">
            <div
              className="left__col bg__image shadow"
              style={{
                backgroundImage: `url(${images[1]})`,
                backgroundPosition: "center",
                backgroundAttachment: "scroll",
              }}
            ></div>
            <div className="righ__col">
              <p>
                Come on down to our cafe and enjoy a cup of coffee you'll love
                or it's free.
              </p>
              <button className="btn btn__light">View Coffee</button>
            </div>
          </div>
          <div className="two__col rev">
            <div
              className="left__col bg__image shadow"
              style={{
                backgroundImage: `url(${images[2]})`,
                backgroundPosition: "center",
                backgroundAttachment: "scroll",
              }}
            ></div>
            <div className="righ__col">
              <p>If you're feeling hungry go ahead and snag a bagel.</p>
              <button className="btn btn__light">View Bagels</button>
            </div>
          </div>
          <div className="two__col">
            <div
              className="left__col bg__image shadow"
              style={{
                backgroundImage: `url(${images[3]})`,
                backgroundPosition: "center",
                backgroundAttachment: "scroll",
              }}
            ></div>
            <div className="righ__col">
              <p>Not in the mood for coffee or bagels? Grab a donut instead.</p>
              <button className="btn btn__light">View Donuts</button>
            </div>
          </div>
          <div className="banner__container">
            <div className="banner__inner">
              <p>
                We cater to events, parties, work functions, and everything in
                between. Enhance your event with quality coffee and bagels.
              </p>
              <button className="btn btn__primary">Book Us</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
