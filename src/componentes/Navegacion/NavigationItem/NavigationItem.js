import React from 'react';


import './NavigationItem.css';

const navigateItem = (props) => (
    <li
        className="NavigateItem"
    >
        <a 
            href={props.link}
            className={props.active ? "active" : null }
        >
            {props.children} 
        </a>
    </li>
);

export default navigateItem;