import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListScrapbook from './components/scrapbook/ListScrapbook';
import Sidebar from './components/Sidebar';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'manjunath',
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Header name={this.state.name} />
          <Sidebar />
          <Routes>
            <Route path="/" element={<ListScrapbook />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>

          <Footer />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
