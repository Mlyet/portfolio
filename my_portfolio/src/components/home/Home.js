import './Home.css';
import Logo from '../../assets/logo.png';
import React from 'react';

function HomePage() {
    const styles = {
        textAlign: 'center',
        fontFamily: 'Montserrat',
        overflowX: 'hidden',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#161647',
        lineHeight: 1.7,
        color: '#fff',
        transform: 'skewY(-5deg)',
      };
    return (
        <div style={styles }>
            <div className="bg-text-container">
                <div className="animate-text">
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                </div>
                <div className="animate-text left">
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                    <span>Portfolio&nbsp;</span>
                </div>
            </div>
            <div className="container">
                <div className="col">
                    <img src={Logo} alt="My logo" id="start-logo" />
                    <h1>Thomas MEYET</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
