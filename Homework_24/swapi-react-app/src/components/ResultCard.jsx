function ResultCard({ data, errorMessage }) {
  if (errorMessage) {
    return <div className="alert alert-danger shadow-sm">{errorMessage}</div>;
  }
  if (!data) return null;

  return (
    <div className="card custom-card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title">User Profile: {data.username}</h5>
        <pre className="json-output">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ResultCard;