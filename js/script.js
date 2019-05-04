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

  // console logs
  getDefaultProps: function() {
    console.log("getDefaultProps: Ustawienie wartości domyślnych");
  },
  componentWillMount: function() {
    console.log(
      "componentWillMount: Podłączenie komponentu przed wykoananiem metody 'render'"
    );
  },
  componentDidMount: function() {
    console.log(
      "componentDidMount: Komponent zamontowany - są możliwe dalsze operacje na utworzonym elemencie"
    );
  },
  componentWillReceiveProps: function() {
    console.log(
      "componentWillReceiveProps: Aktualizacja stanu komponentu po zmianie właściwości"
    );
  },
  shouldComponentUpdate: function() {
    console.log(
      "shouldComponentUpdate: Sprawdzenie, czy komponent wymaga ponownego renderowania"
    );
    return true;
  },
  componentWillUpdate: function() {
    console.log(
      "componentWillUpdate: Aktualizacja komponentu, gdy metoda shouldComponentUpdate zwróci wartość 'true'"
    );
  },
  componentDidUpdate: function() {
    console.log(
      "componentDidUpdate: Komponent uaktualniony - możliwe dalsze operacje na elemencie"
    );
  },
  componentWillUnmount: function() {
    console.log(
      "componentWillUnmount: Usunięcie komponentu po wykonaniu 'zadania'"
    );
  },

  render: function() {
    return React.createElement(
      "div",
      { className: "counter" },
      React.createElement("span", {}, "Licznik " + this.state.counter),
      React.createElement(
        "button",
        { className: "buttonIncrement", onClick: this.increment },
        "Dodaj 1"
      ),
      React.createElement(
        "button",
        { className: "buttonDecrement", onClick: this.decrement },
        "Odejmij 1"
      )
    );
  }
});

// create 3 counters
var counters = React.createClass({
  render: function() {
    return React.createElement(
      "div",
      { className: "counters" },
      React.createElement(Counter, {}),
      React.createElement(Counter, {}),
      React.createElement(Counter, {})
    );
  }
});

var element = React.createElement(counters);
ReactDOM.render(element, document.getElementById("app"));
