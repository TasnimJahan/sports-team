import React, { useEffect, useState } from 'react';
import background from './images/background.jpg';
import './Home.css';
import { CardDeck } from 'react-bootstrap';
import Team from '../Team/Team';

const Home = () => {
    const [teams,setTeams] =useState([]);
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(response => response.json())
        .then(data => setTeams(data.teams))
    },[])

    return (
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={background} alt=""/>
                    </div>
                    <div className="caption">
                        <h1>Sports Team</h1>
                    </div>
                </div>
            </div>
            <CardDeck className="team">
            {
                teams.map(team=><Team team={team} id={team.idTeam}></Team>)
            }
            </CardDeck>
        </div>
    );
};

export default Home;