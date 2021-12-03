import React from 'react';
import './destinationNavbar.css';
import { NavLink } from "react-router-dom";

const DestinationNavbar = React.memo(function ({ destinations }){
    return (
            <nav className="destinationNav">
                {destinations.map((destination, i) =>
                    <NavLink
                        key={i}
                        className={({ isActive }) => isActive ?
                            "destinationNav__activeLink destinationNav__link" : "destinationNav__link"
                        }
                        to={`/destination/${destination}`}
                    >
                        {destination.toUpperCase()}
                    </NavLink>
                )}
            </nav>
    );
});
export default DestinationNavbar;