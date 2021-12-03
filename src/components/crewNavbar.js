import './crewNavbar.css';
import { NavLink } from "react-router-dom";

export default function CrewNavbar({ crewNames }){
    return (
        <nav className="crewNavbar">
            {crewNames.map((name, i) => (
                <NavLink
                    key={i}
                    className={({ isActive }) => isActive ?
                        "circularNavLink activecircularNavlink" : "circularNavLink"
                    }
                    to={`/crew/${name}`}
                >
                </NavLink>
            ))}
        </nav>
    );
}