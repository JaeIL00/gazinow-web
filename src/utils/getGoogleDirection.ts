import { MapLocationLatLng } from "../types";

const getGoogleDirection = async (
    origin: MapLocationLatLng,
    destination: MapLocationLatLng,
    callback: (data: MapLocationLatLng[]) => void
) => {
    const date = new Date();

    const directionsService = new google.maps.DirectionsService();

    const response = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.TRANSIT,
        transitOptions: {
            modes: [google.maps.TransitMode.SUBWAY],
            routingPreference: google.maps.TransitRoutePreference.LESS_WALKING,
            departureTime: date,
        },
    });
    const freshResponse = response.routes[0].overview_path.map((item) => {
        return { lat: item.lat(), lng: item.lng() };
    });

    callback(freshResponse);
};

export default getGoogleDirection;
