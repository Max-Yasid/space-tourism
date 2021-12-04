import React from 'react';
import './TechItem.css';
import { useParams } from 'react-router';

export default function TechItem({ technologies }){
    let { technologyName } = useParams();
    technologyName = technologyName.replaceAll('-', " ");
    const technology = technologies.find((technology) => technology.name === technologyName);

    const techImagePortrait = technology.images.portrait;
    const techImageNamePortrait = techImagePortrait.substring(
        techImagePortrait.lastIndexOf('/') + 1, techImagePortrait.length
    );

    const techImageLandscape = technology.images.landscape;
    const techImageNameLandscape = techImageLandscape.substring(
        techImageLandscape.lastIndexOf('/') + 1, techImageLandscape.length
    );
    return (
        <React.Fragment>
            <section className="TechItem__info">
                <h3 className="techItem__subtitle">THE TECHNOLOGY...</h3>
                <h1 className="TechItem__title">
                    {technology.name.toUpperCase()}
                </h1>
                <p className="techItem__description">
                    {technology.description.replaceAll('-', "‑")}
                </p>
            </section>
            <section className="TechItem__imgContainer">
                <img
                    className="techItem__img"
                    src={require(`./../assets/images/technology/${window.innerWidth > 768
                        ? techImageNamePortrait : techImageNameLandscape}`).default} 
                    alt={technologyName.replaceAll('-', " ")}
                />
            </section>
        </React.Fragment>
    );
};