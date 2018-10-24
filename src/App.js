import React, { Component } from "react";
import "./App.css";
import Card from "./components/card/card";
import Aside from "./components/aside/aside";
import Header from "./components/header";
import Model from "./components/models/main";
import GameModel from "./components/models/game-model";
import { checkFlipped } from "./utils/checkFlipped";

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        checked: false,
        value: 1,
        flipped: false
      },
      {
        id: 1,
        checked: false,
        value: 1,
        flipped: false
      },
      {
        id: 2,
        checked: false,
        value: 2,
        flipped: false
      },
      {
        id: 3,
        checked: false,
        value: 2,
        flipped: false
      },
      {
        id: 4,
        checked: false,
        value: 3,
        flipped: false
      },
      {
        id: 5,
        checked: false,
        value: 3,
        flipped: false
      },
      {
        id: 6,
        checked: false,
        value: 4,
        flipped: false
      },
      {
        id: 7,
        checked: false,
        value: 4,
        flipped: false
      },
      {
        id: 8,
        checked: false,
        value: 5,
        flipped: false
      },
      {
        id: 9,
        checked: false,
        value: 5,
        flipped: false
      },
      {
        id: 10,
        checked: false,
        value: 6,
        flipped: false
      },
      {
        id: 11,
        checked: false,
        value: 6,
        flipped: false
      },
      {
        id: 12,
        checked: false,
        value: 7,
        flipped: false
      },
      {
        id: 13,
        checked: false,
        value: 7,
        flipped: false
      },
      {
        id: 14,
        checked: false,
        value: 8,
        flipped: false
      },
      {
        id: 15,
        checked: false,
        value: 8,
        flipped: false
      },
      {
        id: 16,
        checked: false,
        value: 9,
        flipped: false
      },
      {
        id: 17,
        checked: false,
        value: 9,
        flipped: false
      },
      {
        id: 18,
        checked: false,
        value: 10,
        flipped: false
      },
      {
        id: 19,
        checked: false,
        value: 10,
        flipped: false
      },
      {
        id: 20,
        checked: false,
        value: 11,
        flipped: false
      },
      {
        id: 21,
        checked: false,
        value: 11,
        flipped: false
      },
      {
        id: 22,
        checked: false,
        value: 12,
        flipped: false
      },
      {
        id: 23,
        checked: false,
        value: 12,
        flipped: false
      }
    ],
    score: 0,
    status: null,
    remainTime: 1
  };

  cardClick = async cardIndex => {
    const { cards, score } = this.state;

    // to Check State of all cards
    const FilteredCards = checkFlipped(cards, cardIndex);

    // Change The State Of cards
    await this.setState({
      cards: FilteredCards.cardsCopy,
      score: (this.state.score += FilteredCards.score)
    });

    if (score + FilteredCards.score === 120) {
      return this.winner();
    }

    setTimeout(async () => {
      cards[cardIndex]["flipped"] = false;
      await this.setState({ cards });
    }, 1000);
  };

  // Suffle Data
  suffle = () => {
    const { cards } = this.state;
    cards.sort(() => 0.5 - Math.random());
    this.setState({ cards });
  };

  // New Game
  newGame = async () => {
    const { cards } = this.state;
    cards.forEach(element => {
      element.flipped = false;
      element.checked = false;
    });
    const score = 0;
    const status = null;
    let remainTime = 100;
    await this.setState({ cards, score, status, remainTime });
    this.counter();
  };

  winner = async () => {
    await this.setState({ status: true });
  };

  loser = async () => {
    this.setState({ status: false });
  };

  componentWillMount() {
    // this.suffle();
    this.counter();
  }

  counter = () => {
    let { remainTime, status } = this.state;
    setTimeout(() => {
      // if the user winner stop the setTimeout
      if (!status)
        if (remainTime > 0) {
          remainTime -= 1;
          this.setState({ remainTime });
          this.counter();
        } else {
          if (status !== "winner") this.loser();
        }
    }, 1000);
  };
  closeModel = () => {
    this.setState({ status: null });
  };

  render() {
    const { score, status, remainTime } = this.state;
    return (
      <div className="App">
        <Header score={score} onClick={this.loser} remainTime={remainTime} />
        <div className="cardsBord">
          {this.state.cards.map((element, index) => (
            <Card
              key={element.id}
              checked={element.checked}
              flipped={element.flipped}
              value={element.value}
              onClick={this.cardClick}
              id={index}
            />
          ))}
        </div>
        <Aside />
        {typeof status === "boolean" && (
          <Model
            type={status}
            onClick={this.newGame}
            onCancel={this.closeModel}
          />
        )}
      </div>
    );
  }
}

export default App;
