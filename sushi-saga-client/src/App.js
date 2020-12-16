import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: [],
      money: 100,
      plates: [],
      sushiCount: 0,
    };
  }

  onlyFour = () => {
    return this.state.sushi.slice(this.state.sushiCount, this.state.sushiCount+4);
  };

  nextFour = () => {
    const newSushi = this.state.sushiCount + 4
    this.setState({
      sushiCount: newSushi
    })
  }

  addMoney = (event) => {
    event.preventDefault()
    this.setState({
      money: this.state.money + +event.target[0].value
    })
  }

  handleSushiClick = (sushi) => {
    // sushi image goes away
    // money decreases by the amount of the sushi clicked
    // a plate get added to the table


    const newMoney = this.state.money - sushi.price 
    
    if (!this.state.plates.includes(sushi) && newMoney >= 0) {
        this.setState({
        plates: [...this.state.plates, sushi],
        money: newMoney
      });
    }
  }

  async componentDidMount() {
    const response = await fetch(API);
    const json = await response.json();
    this.setState({ sushi: json });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiData={this.onlyFour()} 
        nextFour={this.nextFour}
        handleSushiClick={this.handleSushiClick}
          plates={this.state.plates}
        />
        <Table money={this.state.money} plates={this.state.plates} addMoney={this.addMoney}/>
      </div>
    );
  }

}

export default App;
