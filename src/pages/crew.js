import './crew.css';
import { PageTitle } from './../components/styledComponents'
import CrewNavbar from './../components/crewNavbar';
import { Outlet } from 'react-router';

export default function Crew({ crewNames }){
    document.body.classList = 'bodyCrewBG';
    return (
        <main className="crew">
            <PageTitle className="crewPageTitle"> 
                <span>02</span>MEET YOUR CREW
            </PageTitle>
            <Outlet />
            <CrewNavbar crewNames={crewNames} />
        </main>
    );
}