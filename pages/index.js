

import styled from "styled-components"
import Layout from "../components/Layout";



const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export default function Home() {
  return (
    <>
    <Layout/>
    </>
  )
}
