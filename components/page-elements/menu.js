import React from 'react';
const Menu = ({ currentWeather }) => (
    <div className="menu">
        <ul>
            <li>
                Getting Started
            </li>
            <li>
                Overview
            </li>
            <li>
                Resources
            </li>
            <li>
                Applications
            </li>
        </ul>
        <style jsx>{`
            .menu {
                background: #2b2f34;
                padding: 0 20px;
                font-size: 0.8em;
            }
            
            .menu ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            
            .menu ul li {
                display: inline-block; 
                padding: 8px 0; 
                margin-right: 20px;
            }
        `}</style>
    </div>
);

export default Menu;