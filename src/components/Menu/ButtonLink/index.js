import React from 'react';

function ButtonLink(props) {
    //props => {className: oq alguém vai passar}
    console.log(props)
    return (
       <a href={props.href} className={props.className}> 
           {props.className}
       </a>
    );
}

export default ButtonLink;