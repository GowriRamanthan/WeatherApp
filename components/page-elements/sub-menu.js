const SubMenu = ({ currentWeather }) => (
    <div className="sub-menu">
        <ul>
            <li>
                Application Preview
            </li>
            <li>
                Application Summary
            </li>
            <li>
                Order Processing
            </li>
            <li className="selected">
                Weather
            </li>
        </ul>
        <style jsx>{`
            .sub-menu {
                background: #393f48;
                padding: 0 20px;
                font-size: 0.8em;
            }
            
            .sub-menu ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            
            .sub-menu ul li {
                display: inline-block;
                padding: 8px 0; 
                margin-right: 20px;
            }
            
            .sub-menu ul li.selected {
                border-bottom: 2px solid #31609a;
            }
        `}</style>
    </div>
);

export default SubMenu;