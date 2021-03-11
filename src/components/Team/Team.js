import React, { useEffect, useState } from 'react';
import { Button ,CardDeck ,Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {strTeam,strTeamBadge,strSport,idTeam} =props.team;
    const history = useHistory();

    const handleClick = (idTeam)=>{
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="teamCard">
            <div className="card" style={{width: '18rem', boxShadow: '10px 10px 30px grey'}}>
                <img src={strTeamBadge} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h3 className="card-title">{strTeam}</h3>
                    <p style={{color: 'dimgray', fontFamily: 'Montserrat', fontWeight: 'medium',fontSize: '16px'}} 
                    className="card-text">Sports type: {strSport}</p>
                    <Button onClick={()=>{handleClick(idTeam)}} variant="success" style={{fontFamily: 'Montserrat', fontWeight: '600',fontSize: '16px'}}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>
            </div>
        </div>
    );
};

export default Team;