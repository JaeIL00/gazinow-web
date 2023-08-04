import { MapLocationLatLng } from "../types";

const getGoogleDirection = async (
    origin: MapLocationLatLng,
    destination: MapLocationLatLng,
    callback: (data: MapLocationLatLng[]) => void
) => {
    const directionsService = new google.maps.DirectionsService();

    const response = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.TRANSIT,
    });
    const freshResponse = response.routes[0].overview_path.map((item) => {
        return { lat: item.lat(), lng: item.lng() };
    });

    console.log(freshResponse);

    callback(freshResponse);
};

export default getGoogleDirection;
