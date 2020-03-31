import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CovidData from './containers/CovidData/CovidData';
import covidTwitter from './components/CovidTwitter/CovidTwitter';
class App extends Component {

  state = {
    loading: true,
    CovidData:null
  }

  async componentDidMount() {
    const url = 'https://corona.lmao.ninja/all';
    const response= await fetch(url);
    const data= await response.json();
    if(data){
      this.setState({CovidData: data});
      this.setState({loading:false});
    }
    console.log(this.state.CovidData);
  }
  
  render() {
    return (
      <div >
        <Layout>
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
      </div>
    );
  }
}

export default App;
