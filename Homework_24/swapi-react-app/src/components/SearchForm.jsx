import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [text, setText] = useState('9942');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-4 shadow-sm">
      <span className="input-group-text">https://www.swapi.tech/api/</span>
      <input 
        type="text" 
        className="form-control" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button 
        className="btn btn-primary" 
        type="submit" 
      >
        Get Info
      </button>
    </form>
  );
}

export default SearchForm;