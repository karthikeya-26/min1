import { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  console.log(pickup);

  return (
    <Wrapper>
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/back.png" />
        </ButtonContainer>
      </Link>

      <InputContainer>
        <FromToIcon>
          <Icon src="https://img.icons8.com/ios/50/resize-vertical.png" />
        </FromToIcon>

        <InputBoxes>
          <Input
            placeholder="Enter your location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to ?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
      </InputContainer>
      <Link
        href={{
          pathname: "/confirm",
          query: { pickup: pickup, dropoff: dropoff },
        }}
      >
        <ConfirmButton>Confirm Location</ConfirmButton>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img`
h-12
`;
const InputContainer = tw.div` bg-white flex flex-row items-center p-4`;

const FromToIcon = tw.div``;

const Icon = tw.img`
 w-15 p-4
`;

const InputBoxes = tw.div` flex flex-col p-4 flex-1`;

const Input = tw.input` bg-gray-200 p-1 my-2 rounded-lg outline-none border-none `;

const ConfirmButton = tw.div` bg-green-300 text-black text-center p-4 rounded-lg m-4 cursor-pointer`;
