import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const componentDidCatch = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
      // You can also log the error to an error reporting service here
    };

    // Register the componentDidCatch error handler
    window.addEventListener('error', componentDidCatch);

    // Clean up the error handler on component unmount
    return () => {
      window.removeEventListener('error', componentDidCatch);
    };
  }, []);

  if (hasError) {
    // Render fallback UI when an error occurs
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{getErrorString(error)}</p>
        <p>Component Stack Error Details:</p>
        <p>{errorInfo && errorInfo.componentStack}</p>
      </div>
    );
  }

  // Render the children components if no error occurred
  return children;
}

function getErrorString(error) {
  if (error instanceof ErrorEvent) {
    return error.message;
  }
  return error && error.toString();
}

export default ErrorBoundary;