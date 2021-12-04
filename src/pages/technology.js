import { PageTitle } from '../components/styledComponents';
import './technology.css';

import TechNavbar from '../components/TechNavbar';
import { Outlet } from 'react-router';

export default function Technology({ technologiesNames }){
    document.body.classList = 'bodyTechnologyBG';
    return (
        <main className="technology">
            <PageTitle className="techonology__pageTitle">
                <span>03</span> SPACE LAUNCH 101
            </PageTitle>
            <TechNavbar technologiesNames={technologiesNames} />
            <Outlet />
        </main>
    )
}