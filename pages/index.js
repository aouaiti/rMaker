import Head from "next/head";
import Image from "next/image";
import Container from "../components/Layouts/Container";
import AppBar from "../components/Organisms/AppBar";
import Motto from "../components/Organisms/Motto";
import BackGround from "../components/Layouts/BackGround";

export default function Home() {
  // const route = useRouter();
  // console.log(route);
  return (
    <>
      <AppBar />
      <Container>
        <Motto />
        <BackGround />
      </Container>
    </>
  );
}
