import React, {Component} from 'react';
import APIURL from '../../helpers/environment';


import { Button, withStyles, Theme } from '@material-ui/core';
import {purple} from '@material-ui/core/colors';

const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[300]),
      backgroundColor: purple[300],
      '&:hover': {
        backgroundColor: purple[400],
      },
    },
  }))(Button);

type AcceptedProps = {
    sessionToken: string;
    adminFetch:() => Promise<any>;
    id: string;
}

type adminState = {

}

export default class AdminUpdate extends Component<AcceptedProps, adminState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {

        }
    }

    deleteFetch = (): void => {
        fetch(`${APIURL}/users/delete/${this.props.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then(() => this.props.adminFetch())
    }

    render() {
        return(
            <div>
                <ColorButton onClick={this.deleteFetch}>Delete User</ColorButton>
            </div>
        )
    }
}