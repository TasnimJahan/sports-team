import React from 'react';

const NoMatch = () => {
    const NoMatch={
        border: '1px solid grey',
        margin: '20% auto',
        height: '10rem',
        width:'20rem',
        backgroundColor: 'red',
        boxShadow: '10px 10px 40px grey'
    };
    return (
        <div style={NoMatch}>
            <h1>404 ERROR</h1>
            <h2>Sorry!! Nothing Found..</h2>
        </div>
    );
};

export default NoMatch;