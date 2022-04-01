import React from 'react';

export default function Bookcard (props){
    return(
        <div class="bookcard">
            <div class="b-icon"><img src={props.pic}/></div> 
            <h2>{props.name}</h2>
            <div class="bc-card">
                <div class="title">{props.titlea}</div>
                <div class="desc">{props.desca}</div>
            </div>
            <div class="bc-card">
                <div class="title">{props.titleb}</div>
                <div class="desc">{props.descb}</div>
            </div>
        </div>
    );
}