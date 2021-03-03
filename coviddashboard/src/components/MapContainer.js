import React from "react";
import GoogleMapReact from 'google-map-react';
import "./MapContainer.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends React.Component{
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA2bxsu8TiIURpAa7kPNC04HiJ7gmn-kb4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
  
}

export default MapContainer;
