import React from 'react';
import './TechNavbar.css';
import { NavLink } from 'react-router-dom';


const TechNavbar = React.memo(function({ technologiesNames }) {
    return (
        <nav className="techNavbar">
            {technologiesNames.map((technologyName, i) =>
                <NavLink
                    key={i}
                    to={technologyName}
                    className={({isActive}) => 
                        `enumeratedCircularLink ${isActive && "enumeratedCircularLinkActive"}`}
                >
                    {i + 1}
                </NavLink>
            )}
        </nav>
    );
});
export default TechNavbar;