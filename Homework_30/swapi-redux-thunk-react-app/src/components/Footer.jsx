import { useDispatch } from 'react-redux';
import { clearData } from '../redux/slices/swapiSlice';

function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="mt-4 mb-5 text-center">
      <button 
        className="btn btn-danger shadow-sm" 
        onClick={() => dispatch(clearData())}
      >
        Clear
      </button>
    </footer>
  );
}

export default Footer;