import React from 'react';
import { useParams } from 'react-router';
import './destinationItem.css';

const DestinationItem = function({ destinationsInfo }){
    const params = useParams();
    const destinationInfo = destinationsInfo.find(destination => 
        destination.name === params.destinationName
    );
    const imagePath = destinationInfo.images.png;
    const destinationImageName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.length );
    return (
        <React.Fragment>
            <section className="destinationItem__imgContainer">
                <img 
                    className="destinationItem__img" 
                    src={require(`./../assets/images/destination/${destinationImageName}`).default} 
                    width="445" 
                    alt="moon" 
                />
            </section>
            <section className="destinationItem__infoContainer">
                <div className="destinationItem__info">
                    <h1 className="destinationItem__title">
                        { destinationInfo.name.toUpperCase() }
                    </h1>
                    <p className="destinationItem__description">
                        {destinationInfo.description}
                    </p>
                    <hr className="destinationItem__hr" />
                    <section className="destinationItem__secondaryInfo">
                        <div className="festinationItem__distance">
                            <p className="festinationItem__distanceTitle">
                                AVG. DISTANCE
                            </p>
                            <p className="festinationItem__distanceInfo">
                                { destinationInfo.distance.toUpperCase() }
                            </p>
                        </div>
                        <div className="destinationItem__travelTime">
                            <p className="destinationItem__travelTimeTitle">
                                EST. TRAVEL TIME
                            </p>
                            <p className="destinationItem__travelTimeInfo">
                                { destinationInfo.travel.toUpperCase() }
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </React.Fragment>
    );
};

export default DestinationItem;