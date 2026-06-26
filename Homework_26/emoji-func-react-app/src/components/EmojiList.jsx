import React from 'react';

function EmojiList({ votes, onVote }) {
  return (
    <div className="d-flex justify-content-around my-4 flex-wrap">
      {Object.keys(votes).map((emoji) => (
        <div key={emoji} className="emoji-card p-3 m-2 text-center" onClick={() => onVote(emoji)} style={{ cursor: 'pointer' }}>
          <div className="emoji-display mb-2">{emoji}</div>
          <span className="badge bg-primary fs-6 py-2 px-3 rounded-pill">{votes[emoji]}</span>
        </div>
      ))}
    </div>
  );
}
export default EmojiList;