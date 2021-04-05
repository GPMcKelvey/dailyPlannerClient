import React, {Component} from 'react';
import NavBar from './navbar/Navbar';
import HomeDisplay from './HomeDisplay';


type AcceptedProps = {

}

type SearchState = {
    results: []
}

export default class HomePage extends Component<AcceptedProps, SearchState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            results: []
        }
    }

    publicEventFetch = async () => {
       await fetch(`http://localhost:3000/events/public`)
        .then(res => res.json())
        .then((json) => (
           console.log(json), 
           this.setState({
                results: json.event
            })
            
        ))
        console.log(this.state.results)
    }

    componentDidMount(){
        this.publicEventFetch();
    }

    render() {
        return(
            <div>
                
                <HomeDisplay results={this.state.results}/>
                
            </div>
        )
    }
}