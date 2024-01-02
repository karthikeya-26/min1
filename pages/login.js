import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Logo src="/icon2.jpg" />
      <Title>Sign in to access your account</Title>
      <SigninButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SigninButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-white p-4
`;
const Logo = tw.img`
    h-28 w-auto object-contain self-center 
`;
const Title = tw.div`
    text-2xl font-semibold text-gray-500 text-center py-4
`;
const SigninButton = tw.button`
    bg-green-500 text-black text-center text-xl p-4 rounded-lg
`;
