const Pet = () =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, "Fifi"),
    React.createElement("h2", {}, "dog"),
    React.createElement("h2", {}, "Schnauzer")
  ]);

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adoptable..."),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);

ReactDOM.render(React.createElement(App), document.getElementById("root"));
