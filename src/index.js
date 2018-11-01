const Pet = props => {
  const { name, animal, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked it!");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adoptable Pets..."
      ),
      React.createElement(Pet, {
        name: "Fido",
        animal: "dog",
        breed: "mutt"
      }),
      React.createElement(Pet, {
        name: "Saunders",
        animal: "cat",
        breed: "siamese"
      }),
      React.createElement(Pet, {
        name: "Fritz",
        animal: "fish",
        breed: "goldfish"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
