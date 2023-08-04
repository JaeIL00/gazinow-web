import { useEffect } from "react";
import { MapLocationLatLng } from "../types";

interface PropTypes {
    direction: MapLocationLatLng[];
}

const { naver } = window;

const NaverMap = ({ direction }: PropTypes) => {
    useEffect(() => {
        const mapDiv = document.getElementById("map");
        const map = new window.naver.maps.Map(mapDiv, {
            center: naver.maps.LatLng(37.497966, 127.027741),
            zoom: 15,
        });

        if (direction) {
            const polylineLatLng = direction.map(
                (item) => new naver.maps.LatLng(item.lat, item.lng)
            );
            new window.naver.maps.Polyline({
                map: map,
                path: polylineLatLng,
                strokeWeight: 8,
                strokeColor: "#286ae8",
                strokeLineCap: "round",
            });
        }
    }, [direction]);

    return <div id="map" className="map" />;
};

export default NaverMap;
