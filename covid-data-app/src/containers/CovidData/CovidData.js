import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
class CovidData extends Component{
    render(){
        return (
            <Auxiliary>
                <div>Country</div>
                <div>Cases</div>
            </Auxiliary>
        );
    }
}

export default CovidData;