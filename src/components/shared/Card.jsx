import PropTypes from 'prop-types'
import React from 'react'

function Card ( {children , reverse}){

    // Conditional Class
    // return (
    //     <div className={`card ${reverse && `reverse`}`}>
    //        {children}
    //     </div>
    // );

    // Conditional Style
    return (
        <div className="card" style={{
            backgroundColor :reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff': '#000'
        }}>
           {children}
        </div>
    );
}
// Setting Props
Card.defaultProps = {
    reverse : false,
}
Card.propTypes = {
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

export default Card;