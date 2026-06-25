import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fullUser = {
    status: "success",
    data: {
      id: "9942",
      role: "admin",
      username: "test_phantom",
      email: "phantom@example.com",
      profile: {
        firstName: "Ivan",
        lastName: "Ivanov",
        registeredAt: "2026-06-25",
        isActive: true
      },
      permissions: ["read", "write", "delete"]
    }
  };

  const handleSearch = (id) => {
    if (id === '9942') {
      setUserData(fullUser.data);
      setError('');
    } else {
      setUserData(null);
      setError(`Користувача з ID "${id}" не знайдено.`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Header />
          <SearchForm onSearch={handleSearch} />
          {(userData || error) && <ResultCard data={userData} errorMessage={error} />}
        </div>
      </div>
    </div>
  );
}

export default App;