import React from "react";
import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";
import "./Menu.css";

const Menu = (props) => {
  const images = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1610735458851-bf3be7078588?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  ];
  const [modalContent, setModalContent] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const triggerModal = () => {
    setShowModal(!showModal);
  };
  const modalData = [
    {
      id: 1,
      category: "donuts",
      items: [
        { name: "glazed", price: 1 },
        { name: "sprinkles", price: 1.5 },
        { name: "boston creme", price: 2 },
      ],
    },
    {
      id: 2,
      category: "bagels",
      items: [
        { name: "plain", price: 1 },
        { name: "blueberry", price: 1.5 },
        { name: "strawberry", price: 1.5 },
      ],
    },
    {
      id: 3,
      category: "coffee",
      items: [
        { name: "black", price: 2 },
        { name: "mocha", price: 3 },
        { name: "frappe", price: 3 },
      ],
    },
  ];
  const prepareModal = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let data = modalData.filter((item) => {
      return item.category === name;
    });
    setModalContent(data);
    triggerModal();
  };
  return (
    <>
      <Layout>
        <div className="menu__container">
          <div className="menu__inner">
            <div
              className="menu__item"
              style={{ backgroundImage: `url(${images[0]})` }}
            >
              <div className="menu__text">
                <h2>Coffee</h2>
                <p>
                  We've got all the caffeine. Iced, Hot, Espresso, whatever you
                  are in the mood for!
                </p>
                <button
                  className="btn btn__primary"
                  name="coffee"
                  onClick={prepareModal}
                >
                  View Coffee
                </button>
              </div>
            </div>
            <div
              className="menu__item"
              style={{ backgroundImage: `url(${images[1]})` }}
            >
              <div className="menu__text">
                <h2>Donuts</h2>
                <p>
                  Sprinkled, Glazed, Filled, it's all there. We're sure there's
                  something you'll like.
                </p>
                <button
                  className="btn btn__primary"
                  name="donuts"
                  onClick={prepareModal}
                >
                  View Donuts
                </button>
              </div>
            </div>
            <div
              className="menu__item"
              style={{ backgroundImage: `url(${images[2]})` }}
            >
              <div className="menu__text">
                <h2>Bagels</h2>
                <p>
                  Sometimes all you need is a bagel and cream cheese. Don't
                  worry, we've got different kinds if plain simply won't do.
                </p>
                <button
                  className="btn btn__primary"
                  name="bagels"
                  onClick={prepareModal}
                >
                  View Bagels
                </button>
              </div>
            </div>
          </div>
        </div>
        {showModal ? <Modal set={triggerModal} content={modalContent} /> : null}
      </Layout>
    </>
  );
};

export default Menu;
