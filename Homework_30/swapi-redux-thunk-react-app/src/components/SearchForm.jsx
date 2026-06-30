import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSwapiData } from '../redux/slices/swapiSlice';

function SearchForm() {
  const [text, setText] = useState('1');
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(fetchSwapiData(text));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-4 shadow-sm">
      <span className="input-group-text">mockapi.io/swapi/</span>
      <input 
        type="text" 
        className="form-control" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter ID"
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