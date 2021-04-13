import React from 'react'

import './HomeStyle.css';

import { Card, CardContent, CardActions, Box } from '@material-ui/core';


type AcceptedProps = {
    eventDate: Date;
    eventDescription: string;
    eventEndTime: number;
    eventStartTime: number;
    eventTitle: string;
}

const HomeDisplay = (props: {results: Array<AcceptedProps>}) => {

    let result = props.results;
    console.log(result);
    return (
        <div>
            {result.map((result: AcceptedProps, index) => {
                return(    
                    <div key={index} >
                    <Box pb={2} display='flex' justifyContent='center' >    
                    <Card id='homeDiv' variant='outlined'>
                        <CardContent>
                       <h1>{result.eventTitle}</h1>
                       <h3>{result.eventDescription}</h3>
                       <h5>Date: {result.eventDate}</h5>
                       <h5>Start time: {result.eventStartTime}</h5>
                       <h5>End time: {result.eventEndTime}</h5>
                       </CardContent>
                       </Card>
                       </Box>
                    </div>
               )
            })}
        </div>
    )
}

export default HomeDisplay;