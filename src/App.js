import React, { useState, useEffect } from 'react';

const App = () => {
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch API data
  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      // Replace with your API endpoint
      const response = await fetch('https://www.shop.tekmetric.com/api/v1');
    console.log(response);
    
      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2)); // Pretty print JSON
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="App">
      <h1>API Response in Textarea</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <textarea
        value={apiResponse}
        readOnly
        rows="10"
        cols="50"
        style={{ width: '100%', padding: '10px' }}
      ></textarea>

      <br />
      <button onClick={fetchData} style={{ marginTop: '20px' }}>
        Reload Data
      </button>
    </div>
  );
};

export default App;
