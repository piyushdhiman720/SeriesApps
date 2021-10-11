import React from 'react';
import sData from './Sdata';
import Card from './Card';
import './Main.css';


function Main(){
    return (
        <>
        <div className="container-fluid bg-dark m-0">
            <h1 className="header">TOP 5 SERIES OF NETFLIX IN 2020</h1>
        </div>        
        <div className='cards-div'>
            {sData.map((val)=>{
                return(
                    <Card 
                        Img  ={val.Img}
                        title={val.title}
                        sName={val.sName}
                        sLink={val.sLink}
                    />
                )
            })
            }            
        </div>
        <div className="container-fluid bg-dark">
            <h1 className="footer">DESIGN BY PIYUSH DHIMAN</h1>
        </div>               
        </>
    )
}
export default Main;