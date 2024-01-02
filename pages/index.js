import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Link from "next/link";
import Map from "./components/Map";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <Logo src="/icon2.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserrImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://links.papareact.com/3pn" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://links.papareact.com/3pn" />
            Wheels
          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://links.papareact.com/3pn" />
            Schedule
          </ActionButton>
        </ActionButtons>
        <Link href="/search">
          <InputButton>Where to?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`57
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;
const Header = tw.div`
  flex justify-between items-center
`;
const Logo = tw.img`
h-28
`;
const Profile = tw.div`
  flex items-center 
  `;

const UserrImage = tw.img`
  h-12 w-12 rounded-full border border-gray-300 p-px cursor-pointer transform hover:scale-110 transition
`;
const Name = tw.div`
  mr-4 w-20 text-sm
`;
const ActionButtons = tw.div`
  flex-1 flex p-4
`;
const ActionButton = tw.div`
  flex flex-1 bg-gray-200 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl border-2 border-blue-500
`;
const ActionButtonImage = tw.img`
  h-3/5
`;
const InputButton = tw.div`
  bg-gray-200 h-20 flex items-center mt-8 rounded-lg text-2xl p-4
`;
