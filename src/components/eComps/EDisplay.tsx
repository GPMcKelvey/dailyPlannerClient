import React from 'react';

import { Card, CardContent, Box } from '@material-ui/core';

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

const EventsDisplay = (props: {results: Array<AcceptedProps>, sessionToken: string, personalEventFetch: () => Promise<any>}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps) => {
                return(
                <Box pb={2}>    
                <Card id='eCard' variant='outlined'>
                    <CardContent>
                   <h1>{result.eventTitle}</h1>
                   <h3>{result.eventDescription}</h3>
                   <h5>Date: {result.eventDate}</h5>
                   <h5>Start time: {result.eventStartTime}</h5>
                   <h5>End time: {result.eventEndTime}</h5>
                   </CardContent>
                   <EventsUpdate sessionToken={props.sessionToken} personalEventFetch={props.personalEventFetch} id={result.id} eventDate={result.eventDate} eventDescription={result.eventDescription} eventEndTime={result.eventEndTime} eventStartTime={result.eventStartTime} eventTitle={result.eventTitle} eventPrivacy={result.eventPrivacy}/>
               </Card>
               </Box>
               )
            })}
        </div>
    )
}

export default EventsDisplay;