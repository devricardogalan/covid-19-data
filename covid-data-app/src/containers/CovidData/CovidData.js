import React, { Component } from 'react';

const CovidData= (props) =>{
    return (
        <div>
            <p>
            Cases: {props.covidData.cases}
            </p>
            <p>
            Deaths: {props.covidData.deaths}
            </p>
            <p>
            Recovered: {props.covidData.recovered}
            </p>
            <p>
            Active: {props.covidData.active}
            </p>
            <p>
            Countries Affected: {props.covidData.affectedCountries}
            </p>
        </div>
    )
};

export default CovidData;