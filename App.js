import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// console.log(heading);

// JSX
const Title = () => (
  <h1 className="head" tabIndex={5}>
    Namaste React using JSX 🚀
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(<HeadingComponent />);
