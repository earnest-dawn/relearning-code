import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import denzelLogoBackground from '../../assets/images/denzelLogoBackground.png';
import denzelAward from '../../assets/images/denzelAward.jpg';
import './HomePage.css';
import insideFooTruck from '../../assets/images/insideFooTruck.jpg';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function HomePage() {
    return (
        <>
            <div id="wholeHome">
                <div
                    className="home"
                    style={{
                        backgroundImage: `url(${denzelLogoBackground})`,
                    }}
                >
                    <div className="headerContainer">
                        <h1>Startup webpage</h1>
                        <p>this is the Startup webpage!</p>
                        <Link to="/orderOnline">
                            <button>Startup webpage</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
