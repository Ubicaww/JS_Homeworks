import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary спіймав помилку:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mt-5 text-center">
          <div className="alert alert-danger py-5 border-0 shadow">
            <h2>Щось пішло не так...</h2>
            <p className="mb-4">Ми вже працюємо над виправленням цієї помилки.</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Оновити сторінку
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;