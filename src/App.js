import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };
  return (
    <BrowserRouter basename='/https://flareflashfeed.netlify.app'>
      <div>
        <Navbar country={selectedCountry} onCountryChange={handleCountryChange} />
        <Routes>
          <Route
            path="/business"
            element={<News key={'business'} pageSize={9} country={selectedCountry} category="business" />}
          />
          <Route
            path="/sports"
            element={<News key={'sports'} pageSize={9} country={selectedCountry} category="sports" />}
          />
          <Route
            path="/entertainment"
            element={<News key={'entertainment'} pageSize={9} country={selectedCountry} category="entertainment" />}
          />
          <Route
            path="/health"
            element={<News key={'health'} pageSize={9} country={selectedCountry} category="health" />}
          />
          <Route
            path="/science"
            element={<News key={'science'} pageSize={9} country={selectedCountry} category="science" />}
          />
          <Route
            path="/technology"
            element={<News key={'technology'} pageSize={9} country={selectedCountry} category="technology" />}
          />
          <Route
            path="/"
            element={<News key={'general'} pageSize={9} country={selectedCountry} category="general" />}
          />
          <Route
            path="general"
            element={<News key={'general'} pageSize={9} country={selectedCountry} category="general" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
