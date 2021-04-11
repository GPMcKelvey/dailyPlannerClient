let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1' :
        //this is the local host name of your api
        APIURL = 'http://localhost:3000';
        break;
    //this is the deployed react application
    case 'gpm-dailyplanner-client.herokuapp.com':
        //this is the full url of your deployed api
        APIURL = 'https://gpm-dailyplanner-server.herokuapp.com'
}

export default APIURL;