import React from 'react';

// styles
import "./home-page.styles.scss";

// components
import Directory from '../../components/directory/directory.components.jsx';

const HomePage = () => (
    <div className="home-page">
    {/* components*/} 
        <Directory />
    </div>
)

export default HomePage;