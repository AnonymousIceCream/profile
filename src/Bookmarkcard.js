import React from 'react';

export default function Bookcard (props){
    return(
        <div class="bookmard-card">
            <img class ="icon" src={props.icon} alt ="Phone"/>
            <div class="l-desc">{props.text}</div>
        </div>
    );
}