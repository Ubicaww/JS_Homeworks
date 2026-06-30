import { useSelector } from 'react-redux';
import { selectSwapiData, selectSwapiError, selectSwapiLoading } from '../redux/selectors';

function ResultCard() {
  const data = useSelector(selectSwapiData);
  const errorMessage = useSelector(selectSwapiError);
  const loading = useSelector(selectSwapiLoading);

  if (loading) {
    return <div className="alert alert-info shadow-sm">Loading...</div>;
  }

  if (errorMessage) {
    return <div className="alert alert-danger shadow-sm">{errorMessage}</div>;
  }
  
  if (!data) return null;

  return (
    <div className="card custom-card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title">Profile ID: {data.id}</h5>
        <pre className="json-output">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ResultCard;