import React from 'react';
import EventsUpdate from './EUpdate';

type AcceptedProps = {
    eventDate: Date,
    eventDescription: string,
    eventEndTime: number,
    eventStartTime: number,
    eventTitle: string,
    eventPrivacy: boolean,
    id: string
}

const EventsDisplay = (props: {results: Array<AcceptedProps>, sessionToken: string, personalEventFetch: any}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps) => {
                return(    
                <div>
                   <h2>{result.eventTitle}</h2>
                   <h4>{result.eventDescription}</h4>
                   <h6>Date: {result.eventDate}</h6>
                   <h6>Start time: {result.eventStartTime}</h6>
                   <h6>End time: {result.eventEndTime}</h6>
                   <EventsUpdate sessionToken={props.sessionToken} personalEventFetch={props.personalEventFetch} id={result.id} eventDate={result.eventDate} eventDescription={result.eventDescription} eventEndTime={result.eventEndTime} eventStartTime={result.eventStartTime} eventTitle={result.eventTitle} eventPrivacy={result.eventPrivacy}/>
               </div>
               )
            })}
        </div>
    )
}

export default EventsDisplay;