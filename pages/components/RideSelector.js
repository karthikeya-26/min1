import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupcoordinates, dropoffcoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupcoordinates[0]},${pickupcoordinates[1]};${dropoffcoordinates[0]},${dropoffcoordinates[1]}?access_token=pk.eyJ1Ijoia2FydGhpay0wNCIsImEiOiJjbHFqamdwbnAwa2VsMnFyeWZrN2s1ZXF1In0.iur5mFDUNKr_VQoZNwIWTw`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.routes && data.routes[0]) {
          setRideDuration(data.routes[0].duration);
        }
      });
  }, [pickupcoordinates, dropoffcoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <VehicleList>
        {carList?.map((car, index) => (
          <Vehicle key={index}>
            <VehicleImage src={car.imgUrl} />
            <VehicleDetails>
              <Service>{car.service}</Service>
              <Time>{car.time}</Time>
            </VehicleDetails>
            <Price>
              {"₹" + (rideDuration * car.multiplier).toFixed(0) / 10}
            </Price>
          </Vehicle>
        ))}
      </VehicleList>
    </Wrapper>
  );
};
//https://i.ibb.co/cyvcpfF/uberx.png
export default RideSelector;

const Wrapper = tw.div`
  flex-1  overflow-y-scroll flex flex-col
`;
const Title = tw.div` text-xs bg-green-100 py-2 text-center `;
const VehicleList = tw.div` flex flex-1 flex-col overflow-y-scroll`;
const Vehicle = tw.div` flex flex-1 m-1 p-4 items-center bg-gray-200 rounded-lg`;
const VehicleImage = tw.img` h-14 mr-4`;
const VehicleDetails = tw.div` flex-1 `;
const Service = tw.div`font-medium `;
const Time = tw.div` text-xs text-green-800 `;
const Price = tw.div` text-sm  `;
