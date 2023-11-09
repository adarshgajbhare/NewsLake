import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "us"
    };
  }

  handleCountryChange = (country) => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const { selectedCountry } = this.state;

    return (
      <BrowserRouter basename='/FlashFeedNews'>
        <div>
          <Navbar
            country={selectedCountry}
            onCountryChange={this.handleCountryChange}
          />
          <Routes>
            <Route
              path="/business"
              element={<News key={"business"} pageSize={9} country={selectedCountry} category="business" />}
            />
            <Route
              path="/sports"
              element={<News key={"sports"} pageSize={9} country={selectedCountry} category="sports" />}
            />
            <Route
              path="/entertainment"
              element={<News key={"entertainment"} pageSize={9} country={selectedCountry} category="entertainment" />}
            />
            <Route
              path="/health"
              element={<News key={"health"} pageSize={9} country={selectedCountry} category="health" />}
            />
            <Route
              path="/science"
              element={<News key={"science"} pageSize={9} country={selectedCountry} category="science" />}
            />
            <Route
              path="/technology"
              element={<News key={"technology"} pageSize={9} country={selectedCountry} category="technology" />}
            />
            <Route
              path="/general"
              element={<News key={"general"} pageSize={9} country={selectedCountry} category="general" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}