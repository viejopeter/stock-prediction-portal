import React from 'react'
import Button from "./Button.jsx";

const Main = () => {
    return(
        <>
            <div className="container">
                <div className="p-5 text-center bg-light-dark rounded">
                     <h1 className="text-light">Stock Prediction Portal</h1>
                     <p className="text-light lead">Welcome to our Stock Prediction Portal, your gateway to smarter investment decisions. Our platform uses advanced algorithms and real-time market data to provide accurate stock trend predictions, helping you identify potential opportunities and risks. Whether you're a beginner or an experienced trader, our intuitive tools and insights make it easier to analyze stocks, track performance, and make informed decisions with confidence.</p>
                     <Button text='Login' class='btn-outline-info'/>
                </div>
            </div>
        </>
    )
}

export default Main