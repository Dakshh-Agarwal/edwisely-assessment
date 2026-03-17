import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
        console.log('Connecting to:', backendUrl);
        const response = await fetch(`${backendUrl}/api/test`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Edwisely Assessment</h1>
        
        <div style={{marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
          <h2>Backend Connection Status</h2>
          <p style={{fontSize: '12px', color: '#666'}}>
            Backend URL: {process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}
          </p>
          {loading && <p>Loading...</p>}
          {error && <p style={{color: 'red'}}>Error: {error}</p>}
          {data && (
            <div style={{color: 'green'}}>
              <p>✅ Connected to Backend!</p>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>

        <p style={{marginTop: '20px', fontSize: '14px', color: '#666'}}>
          Frontend: Vercel | Backend: Render
        </p>
      </header>
    </div>
  );
}

export default App;
