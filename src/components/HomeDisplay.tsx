import React from 'react'

type AcceptedProps = {
    eventDate: Date,
    eventDescription: string,
    eventEndTime: number,
    eventStartTime: number,
    eventTitle: string
}

const HomeDisplay = (props: {results: Array<AcceptedProps>}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps, index) => {
                return(    
                <div key={index}>
                   <h2>{result.eventTitle}</h2>
                   <h4>{result.eventDescription}</h4>
                   <h6>Date: {result.eventDate}</h6>
                   <h6>Start time: {result.eventStartTime}</h6>
                   <h6>End time: {result.eventEndTime}</h6>
               </div>
               )
            })}
        </div>
    )
}

export default HomeDisplay;