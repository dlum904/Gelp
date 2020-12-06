import React from 'react';
import ReactDOM from 'react-dom';

class GoogleMap extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.business.lat, lng: this.props.business.lng },
            zoom: 15
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const markerOptions = {
            position: { lat: this.props.business.lat, lng: this.props.business.lng },
            map: this.map
        }
        this.marker = new google.maps.Marker(markerOptions);
    }

    render() {
        return (
            <div className="location-map" ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default GoogleMap;