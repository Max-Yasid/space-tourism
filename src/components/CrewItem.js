import React from 'react';
import './crewItem.css';

import { useParams } from 'react-router';

export default function CrewItem({ crewMembers }){
    const { crewMemberName } = useParams();
    const crewMemberInfo = crewMembers.find((member) => 
        member.name === crewMemberName.replaceAll('-', " ")
    );
    const memberImagePath = crewMemberInfo.images.png;
    const memberImageName = memberImagePath.substring(
        memberImagePath.lastIndexOf('/') + 1, memberImagePath.length
    );
    return (
        <React.Fragment>
            <section className="crewItem__imgContainer">
                <img
                    className="crewItem__img"
                    src={ require(`./../assets/images/crew/${memberImageName}`).default } 
                    alt={crewMemberInfo.name}
                />
            </section>
            <section className="crewItem__info">
                <div className="crewItem__infoSpace"></div>
                <h3 className="crewItem__role">
                    {crewMemberInfo.role.toUpperCase()}
                </h3>
                <h1 className="crewItem__name">
                    {crewMemberInfo.name.toUpperCase()}
                </h1>
                <p className="crewItem__bio">
                    {crewMemberInfo.bio.replaceAll('-', "‑")}
                </p>
            </section>
        </React.Fragment>
    );
}