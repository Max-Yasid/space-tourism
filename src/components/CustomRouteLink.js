import React from 'react';
import './CustomRouteLink.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled, { css } from 'styled-components';

const LinkTextUnderline = styled.div`
    position: absolute;
    bottom: 0;
    width: calc(100% - .2em);
    ${props => props.activeLink && css`
        border-bottom: 3px solid white;
    `}
    @media only screen and (max-width: 375px){
        position: static;
        height: 30px;
        ${props => props.activeLink && css`
            border-bottom: none;
            border-right: 3px solid white;
        `}
    }
`;

const CustomRouteLink = React.memo(function ({to, children}) {
    const resolved = useResolvedPath(to);
    const isPathHome = resolved.pathname === "/";
    const doesURLlinkMatchRoute = useMatch({ path: resolved.pathname, end: isPathHome }) && true;
    return (
        <LinkWithMemo doesURLlinkMatchRoute={doesURLlinkMatchRoute} to={to}>
                {children}
        </LinkWithMemo>
    );
});

const LinkWithMemo = React.memo(({to, doesURLlinkMatchRoute, children}) =>
    <Link 
        onClick={(e) => avoidRerenderIfURLNotChange(e, doesURLlinkMatchRoute)} 
        to={to} 
        className="routeLink"
    >
        <div className="routeLink__text">
            {children}
            {doesURLlinkMatchRoute ?
                <LinkTextUnderline activeLink /> :
                <LinkTextUnderline className="routeLink__Underlinetext" />
            }
        </div>
    </Link>
);

function avoidRerenderIfURLNotChange(e, doesURLlinkMatchRoute){
    doesURLlinkMatchRoute && e.preventDefault();
}
export default CustomRouteLink;