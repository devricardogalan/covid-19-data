import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CovidData from './containers/CovidData/CovidData';
import covidTwitter from './components/CovidTwitter/CovidTwitter';
class App extends Component {

  state = {
    loading: true,
    CovidData:null,
    Countries:null
  }

  async componentDidMount() {
    const url = 'https://corona.lmao.ninja/all';
    const response= await fetch(url);
    const data= await response.json();
    if(data){
      this.setState({CovidData: data});
    }
    const urlcountries='https://corona.lmao.ninja/countries';
    const responsecountries= await fetch(urlcountries);
    const datacountries= await responsecountries.json();
    this.setState({Countries: datacountries})
    if(datacountries){
      this.setState({loading:false});
    }
  }
  
  render() {
    return (
      <div >
        {this.state.Countries ? 
        <Layout suggestions={this.state.Countries}>
        {
          this.state.loading ? 
          <div> loading ... </div> : 
          <covidTwitter/> 
        }
        { 
          this.state.loading ? 
          <div>loading ...</div> 
          :
          <CovidData covidData={this.state.CovidData} />
        }
        </Layout>
         : <div>loading...</div>}
      </div>
    );
  }
}

export default App;
