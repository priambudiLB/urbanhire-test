import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Title";
import CountUp from 'react-countup';

let backgroundCity = (url)=> {
    return (
        imageWithClass(url, 'city-image')
    )
};

let imageWithClass = (url, className) => {
    return (
        <img className={className} src={url} title="Urbanhire" alt="Urbanhire"/>
)
};

let buildingNum = (url, num) => {
    return(
        <div className={"building " + num}>
            {imageWithClass(url, num + '-image')}
        </div>
    )
};

let Title = ()=> {
    return (
        <h1>
            Assisting Companies Since 2016
        </h1>
    )
};

let createDataComponent = (item, description)=> {
    return (
        <div className="col-sm-3">
            <h2>
                <CountUp
                    start={0}
                    end={item}
                    duration={2}
                />
                &nbsp;
                <FontAwesomeIcon className="plus" size="sm" icon="plus" color="#2A496D" />
            </h2>
            <span>{description}</span>
        </div>
    )
};

let Data = ()=> {
    return (
        <div className="row justify-content-md-center numbers">
            {createDataComponent(4000, 'Applicants Applied')}
            &nbsp;
            {createDataComponent(2000, 'Candidates Hired')}
            &nbsp;
            {createDataComponent(5000, 'Company Subcriptions')}
        </div>
    )
};

let City = ()=> {
    return (
        <div className="city">
            {backgroundCity('https://winter-cdn.urbanhire.com/img/img-backgroundcity.svg')}
            {buildingNum('https://winter-cdn.urbanhire.com/img/img-standard.svg', 'one')}
            {buildingNum('https://winter-cdn.urbanhire.com/img/img-professional.svg', 'two')}
            {buildingNum('https://winter-cdn.urbanhire.com/img/img-growth.svg', 'three')}
            {buildingNum('https://winter-cdn.urbanhire.com/img/img-enterprise.svg', 'four')}
        </div>
    )
};

export var Content = ()=> {
    return (
        <div className="container text-center">
            <Title/>
            <Data/>
            <City/>
        </div>
    )
};