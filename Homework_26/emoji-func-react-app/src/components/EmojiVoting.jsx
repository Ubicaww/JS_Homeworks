import React, { useState, useEffect, useCallback, useMemo } from 'react';
import EmojiList from './EmojiList';
import Buttons from './Buttons';
import Results from './Results';

function EmojiVoting() {
  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem('emoji_votes');
    return saved ? JSON.parse(saved) : { '😊': 0, '😂': 0, '😎': 0, '🤔': 0, '🤩': 0 };
  });

  const [showResults, setShowResults] = useState(false);
  const [confirmedVotes, setConfirmedVotes] = useState(null);

  useEffect(() => {
    localStorage.setItem('emoji_votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prev) => ({ ...prev, [emoji]: prev[emoji] + 1 }));
  };

  const winner = useMemo(() => {
    if (!confirmedVotes) return "Голосів ще немає";

    const values = Object.values(confirmedVotes);
    const maxVotes = Math.max(...values);
    if (maxVotes === 0) return "Голосів ще немає";

    const winners = Object.keys(confirmedVotes).filter((e) => confirmedVotes[e] === maxVotes);
    
    return winners.length === 1 
      ? `${winners[0]} (Голосів: ${maxVotes})` 
      : `Нічия між: ${winners.join(', ')} (Голосів: ${maxVotes})`;
  }, [confirmedVotes]);

  const handleShowResults = useCallback(() => {
    setConfirmedVotes(votes);
    setShowResults(true);
  }, [votes]);

  const handleClearResults = useCallback(() => {
    setVotes({ '😊': 0, '😂': 0, '😎': 0, '🤔': 0, '🤩': 0 });
    setConfirmedVotes(null);
    setShowResults(false);
    localStorage.removeItem('emoji_votes');
  }, []);

  return (
    <div className="card shadow p-4 mt-4 text-center border-0 bg-white">
      <h2 className="mb-4 text-dark font-weight-bold">Голосування за смайлик</h2>
      <EmojiList votes={votes} onVote={handleVote} />
      <hr className="my-4" />
      <Buttons onShowResults={handleShowResults} onClear={handleClearResults} />
      {showResults && <Results winner={winner} />}
    </div>
  );
}

export default EmojiVoting;