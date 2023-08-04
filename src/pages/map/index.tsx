import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NaverMap from "../../components/NaverMap";

import getGoogleDirection from "../../utils/getGoogleDirection";

import { MapLocationLatLng } from "../../types";

const MapPage = () => {
    const location = useLocation();

    const [directionData, setDirectionData] = useState<MapLocationLatLng[]>();

    const getDirectionDataHandler = (data: MapLocationLatLng[]) => {
        setDirectionData(data);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const origin = searchParams.get("origin");
        const destination = searchParams.get("destination");
        if (origin && destination) {
            const freshOrigin = origin.split(",").map((item) => Number(item));
            const freshDestination = destination
                .split(",")
                .map((item) => Number(item));
            getGoogleDirection(
                { lat: freshOrigin[0], lng: freshOrigin[1] },
                { lat: freshDestination[0], lng: freshDestination[1] },
                getDirectionDataHandler
            );
        }
    }, []);

    return <>{directionData && <NaverMap direction={directionData} />}</>;
};

export default MapPage;
