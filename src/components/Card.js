import React from 'react';

const Card = (props) => {
    return (
            <div className="card h-100 m-5 border-0 card-div" >
              <img src={props.Img} alt="Seriespicture" className="card-img-top card-img" />
              <div className="card-body">
                <span className="card-title" ><a href="https://www.netflix.com/in/" target="_blank">{props.title}</a></span>
                <h3 className="card-text" >{props.sName}</h3>
                <a href={props.sLink} target="_blank" rel="noreferrer" className="btn btn-danger">
                  WATCH NOW
                </a>
              </div>  
            </div>
    )
};
export default Card;