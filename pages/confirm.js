import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const [pickupcoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffcoordinates, setDropoffCoordinates] = useState([0, 0]);

  const router = useRouter();
  const { pickup, dropoff } = router.query;
  //   console.log(pickup, dropoff);

  const getPickupCordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FydGhpay0wNCIsImEiOiJjbHFqamdwbnAwa2VsMnFyeWZrN2s1ZXF1In0.iur5mFDUNKr_VQoZNwIWTw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FydGhpay0wNCIsImEiOiJjbHFqamdwbnAwa2VsMnFyeWZrN2s1ZXF1In0.iur5mFDUNKr_VQoZNwIWTw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCordinates(pickup);
    getDropoffCordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupcoordinates={pickupcoordinates}
        dropoffcoordinates={dropoffcoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupcoordinates={pickupcoordinates}
          dropoffcoordinates={dropoffcoordinates}
        />
        <ConfirmbuttonContainer>
          <Confirmbutton>Confirm ride</Confirmbutton>
        </ConfirmbuttonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;
const RideContainer = tw.div`
    flex-1  px-10 flex flex-col h-1/2
`;
const ConfirmbuttonContainer = tw.div`
    bg-green-300 text-black  rounded-lg m-4 cursor-pointer p-4 items-center justify-center flex 
`;
const Confirmbutton = tw.div`
    text-xl border-t-2`;
const ButtonContainer = tw.div`
  rounded-full  absolute top-4 left-4 bg-white z-10`;
const BackButton = tw.img`
    h-full object-contain 
`;
