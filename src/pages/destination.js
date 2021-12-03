import React from "react";
import './destination.css';

import DestinationNavbar from '../components/destinationNavBar';
import { PageTitle } from './../components/styledComponents'
import { Outlet } from 'react-router';

const Destination = function (props){
    document.body.classList = "bodyDestinationBG";
    return (
        <main className="destination">
            <PageTitle className="pageTitle-marginRight"> 
                <span>01</span>PICK YOUR DESTINATION
            </PageTitle>
            <div className="destination__content">
                <div className="destinationNavContainer">
                    <DestinationNavbar destinations={props.destinationsNames} />
                </div>
                <Outlet />
            </div>
        </main>
    );
};

export default Destination;