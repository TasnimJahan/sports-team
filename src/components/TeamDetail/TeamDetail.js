import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import male from './photo/male.png';
import female from './photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag , faFutbol, faMars, } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF,faYoutube,faDiscourse } from '@fortawesome/free-brands-svg-icons'
const TeamDetail = () => {
    const {id} = useParams()
    const [team,setTeam]= useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=> setTeam(data.teams[0]))
    },[id])
    const {strTeam,intFormedYear,strCountry,strSport,strGender,strTeamBanner,strTeamBadge} = team;
    let gender;
    if(strGender === 'Male') {
        gender = <img style={{width:'100%', padding:'2%', margin:'0'}} src={male} alt=""/>
    }
    else {
        gender = <img style={{width:'100%', padding:'2%', margin:'0'}} src={female} alt=""/>
    }

    return (
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={strTeamBanner} style={{opacity:'.4'}} alt=""/>
                    </div>
                    <div className="captionLogo" style={{}}>
                    <img src={strTeamBadge} className="logo" alt=""/>
                    </div>
                </div>
            </div>

            <div className="card mb-3 teamDetails" style={{backgroundColor: 'rgb(88 197 32)'}}>
                <div className="row g-0">
                    <div className="col-md-6 teamDescription">
                        <div className="card-body">
                            <h2 className="teamName">{strTeam}</h2>
                            <p> <FontAwesomeIcon icon={faDiscourse} /> Founded: {intFormedYear} </p>
                            <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </p>
                            <p> <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                            <p> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                        </div>
                    </div>
                    <div className="col-md-6 gender">
                        {
                            gender
                        }
                    </div>
                </div>
            </div>
            <div className="description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.</p> <br/>              
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="socialMedia">
                <a href="https://twitter.com/arsenal" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="twitterIcon" icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com/Arsenal" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="fbIcon" icon={faFacebookF} /> 
                </a>
                <a href="https://www.youtube.com/user/ArsenalTour" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="youTubeIcon" icon={faYoutube} /> 
                </a> 
            </div>
        </div>
    );
};

export default TeamDetail;