import React from 'react';
import MapContainer from './MapContainer';

class App extends React.Component{
    render(){
        return(
            <div className='ui container' style={{height:'90vh',width: 'auto'}}>
                <MapContainer />
            </div>
        );
    }
}

export default App;