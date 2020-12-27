import React from 'react';
import ReactDOM from 'react-dom';

class LargeGoogleMap extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (Object.values(this.props.businesses).length > 0) {

            const mapOptions = {
                center: {
                    lat: Object.values(this.props.businesses)[0].lat,
                    lng: Object.values(this.props.businesses)[0].lng
                },
                zoom: 13
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            // const markerOptions = {
            //     position: { lat: this.props.business.lat, lng: this.props.business.lng },
            //     map: this.map
            // }
            // this.marker = new google.maps.Marker(markerOptions);
    
            // const markerOptions2 = {
            //     position: {
            //         lat: 40.7331781,
            //         lng: -73.9898288
            //     },
            //     map: this.map
            // }
            // this.marker2 = new google.maps.Marker(markerOptions2)
    
            for (let i = 0; i < Object.values(this.props.businesses).length; i++) {
                
                const markerOptions = {
                    position: {
                        lat: Object.values(this.props.businesses)[i].lat,
                        lng: Object.values(this.props.businesses)[i].lng
                    },
                    label: {
                        text: (i + 1).toString(),
                        color: "white"
                    },
                    map: this.map
                }
                const marker = new google.maps.Marker(markerOptions)
            }
        }
    }

    render() {
        console.log(this.props.business)
        // if (Object.values(this.props.businesses).length > 0) {
            debugger
            return (
                <div className="large-location-map" ref={map => this.mapNode = map}>
                </div>
            )
        }
    //     else
    //     return (null)
    // }
}

export default LargeGoogleMap;