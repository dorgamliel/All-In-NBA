import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Injuries.css';

function Injuries() {
    
    const [players, setPlayers] = useState([]);
    const [test, setTest] = useState();

    const getInjuries = async() => {
        fetch('http://localhost:4200/injuries')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setPlayers(res);
        });
    }


    useEffect(() => {
        getInjuries();
      }, []);

    return (
        <div id="injuries">
            <div id="container">
                <Row key={0} className="injury title-container">
                    <Col className='title'>Name</Col>
                    <Col className='title'>Date</Col>
                    <Col className='title'>Injury</Col>
                    <Col xs={6} className='title'>Status</Col>
                </Row>
                <div id="separation"></div>

                {players.map(player => <Row key={player.name} className="injury injury-content">
                    <Col>{player.name}</Col>
                    <Col>{player.date}</Col>
                    <Col >{player.injury}</Col>
                    <Col xs={6}>{player.status}</Col>
                </Row>)}
            </div>
        </div>
        )

}
        


export default Injuries


