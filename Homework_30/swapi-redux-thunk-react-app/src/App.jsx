import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Header />
          <SearchForm />
          <ResultCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;