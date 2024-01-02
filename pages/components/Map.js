import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FydGhpay0wNCIsImEiOiJjbHFqamdwbnAwa2VsMnFyeWZrN2s1ZXF1In0.iur5mFDUNKr_VQoZNwIWTw";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.552757, 14.752805],
      zoom: 11,
    });

    if (props.pickupcoordinates) {
      addMarker(map, props.pickupcoordinates);
    }

    if (props.dropoffcoordinates) {
      addMarker(map, props.dropoffcoordinates);
    }

    if (props.pickupcoordinates && props.dropoffcoordinates) {
      map.fitBounds([props.pickupcoordinates, props.dropoffcoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupcoordinates, props.dropoffcoordinates]);

  const addMarker = (map, coordinates) => {
    const marker = new mapboxgl.Marker({
      color: "#232323",
      draggable: true,
    })
      .setLngLat(coordinates)
      .addTo(map);
  };

  useEffect(() => {});

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div` flex-1 h-1/2`;
