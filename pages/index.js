

import styled from "styled-components"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";


const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
