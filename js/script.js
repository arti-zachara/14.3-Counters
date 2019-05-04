var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  // increasing state counter value
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  // decreasing state counter value
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement(
      "div",
      {},
      React.createElement("span", {}, "Licznik " + this.state.counter),
      React.createElement(
        "button",
        { className: "buttonIncrement", onClick: this.increment },
        "Dodaj"
      ),
      React.createElement(
        "button",
        { className: "buttonDecrement", onClick: this.decrement },
        "Odejmij"
      )
    );
  }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById("app"));
