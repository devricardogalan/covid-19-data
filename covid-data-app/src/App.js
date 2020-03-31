import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CovidData from './containers/CovidData/CovidData';
import covidTwitter from './components/CovidTwitter/CovidTwitter';
class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <covidTwitter/>
          <CovidData />
        </Layout>
      </div>
    );
  }
}

export default App;
