import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;