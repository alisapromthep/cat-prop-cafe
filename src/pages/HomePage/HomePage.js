import React from "react";
import "./HomePage.scss";
import TextBox from "../../components/TextBox/TextBox.js";

const HomePage = () => {
  const aboutText =
    "When I first learned React props, I struggled to picture how data moved between components. Therefore, I built this little game to help new developers see props in action.";
  return (
    <div className="home__container">
      <TextBox
        title="Welcome to Cat Prop Cafe"
        text={aboutText}
        linkTo="./game"
        linkText="start"
      />
    </div>
  );
};

export default HomePage;
