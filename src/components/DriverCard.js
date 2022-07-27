import React, { useState } from 'react';
import '../style/DriverCard.css'
import '../style/fonts.css'
import { mockFlags } from "../data/flags.js";
import { mockNumbers } from "../data/numbers.js";
const flags = [...mockFlags];
const numbers = [...mockNumbers];

export const DriverCard = (props) => {
    //console.log(props)
    const {points,firstName, lastName, team, country, hex, number, image} = props.driver
    const {index, dataKey} = props

    //const [points, setPoints] = useState(props.driver.points);

    //console.log(points)

    return (
        <div className="driver-card">
            <div className="driver-card-top" >
                <div className="driver-index"> {index} </div>
                <div className="pts-buttons-container">
                    <div className="pts-container">
                        <div className="points-number">
                            {points}
                        </div>
                        <div className="pts-div">PTS</div>
                    </div>
                    <div className="arrow-buttons-container">
                        {/*<img className="arrow-img add-img" src={require('../img/arrow.png')} onClick={() => setPoints(points + 1)} />*/}
                        {/*<img className="arrow-img dec-img" src={require('../img/arrow.png')} onClick={() => setPoints(points - 1)} />*/}
                        {/*<img className="arrow-img add-img" src={require('../img/arrow.png')} onClick={(e) => props.incrementFunc(dataKey, setPoints)} />*/}
                        {/*<img className="arrow-img dec-img" src={require('../img/arrow.png')} onClick={(e) => props.decrementFunc(dataKey, setPoints)} />*/}
                        <img className="arrow-img add-img" src={require('../img/arrow.png')} onClick={(e) => props.incrementFunc(dataKey)} />
                        <img className="arrow-img dec-img" src={require('../img/arrow.png')} onClick={(e) => props.decrementFunc(dataKey)} />
                    </div>
                </div>
            </div>
            <div className="line" />
            <div className="space-between">
                <div style={{"display": "flex"}}>
                    <div className="team-color" style={{"backgroundColor": hex}} />
                        <div>
                            <div className="driver-firstname">{firstName}</div>
                            <div className="driver-lastname">{lastName.toUpperCase()}</div>
                        </div>
                    </div>
                <img className="flag" src={flags.find((flag) => flag.country === country).image}    />
            </div>
            <div className="line"></div>
            <div className="team-name">{team}</div>
            <div className="div-relative" >
                <img className="driver-img" src={image} />
                <img className="driver-number" src={numbers.find((findNumber) => findNumber.number === number).image} />
                <div className="plus-div" />
            </div>
        </div>
    )
}