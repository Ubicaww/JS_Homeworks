import React, { Component } from 'react';
import EmojiList from './EmojiList';
import Buttons from './Buttons';
import Results from './Results';

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: { '😊': 0, '😂': 0, '😎': 0, '🤔': 0, '🤩': 0 },
      winner: null,
      showResults: false
    };
  }

  componentDidMount() {
    const savedVotes = localStorage.getItem('emoji_votes');
    if (savedVotes) this.setState({ votes: JSON.parse(savedVotes) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem('emoji_votes', JSON.stringify(this.state.votes));
    }
  }

  handleVote = (emoji) => {
    this.setState((prevState) => {
      const updatedVotes = {
        ...prevState.votes,
        [emoji]: prevState.votes[emoji] + 1
      };
      return {
        votes: updatedVotes,
      };
    });
  };

calculateWinner = (currentVotes) => {
    const values = Object.values(currentVotes);
    const maxVotes = Math.max(...values);

    if (maxVotes === 0) return "Голосів ще немає";

    const winners = Object.keys(currentVotes).filter(
      (emoji) => currentVotes[emoji] === maxVotes
    );

    if (winners.length === 1) {
      return `${winners[0]} (Голосів: ${maxVotes})`;
    }

    return `Нічия між: ${winners.join(', ')} (Голосів: ${maxVotes})`;
  };

  handleShowResults = () => {
    this.setState({ winner: this.calculateWinner(this.state.votes), showResults: true });
  };

  handleClearResults = () => {
    this.setState({ votes: { '😊': 0, '😂': 0, '😎': 0, '🤔': 0, '🤩': 0 }, winner: null, showResults: false });
    localStorage.removeItem('emoji_votes');
  };

  render() {
    return (
      <div className="card shadow p-4 mt-4 text-center border-0 bg-white">
        <h2 className="mb-4">Голосування за смайлик</h2>
        <EmojiList votes={this.state.votes} onVote={this.handleVote} />
        <hr />
        <Buttons onShowResults={this.handleShowResults} onClear={this.handleClearResults} />
        <Results winner={this.state.winner} />
      </div>
    );
  }
}
export default EmojiVoting;