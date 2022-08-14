

import styled from "styled-components"
import Header from "../components/Header";


const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export default function Home() {
  return (
    <Header/>
  )
}
