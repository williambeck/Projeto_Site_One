import { Background, Container, Content } from "./styles";
import Image from "next/Image"

 function Header() {
    return (
        <Container>
            <div className="banner">
                <img src="imagens/bg-3.jpg"
                width={1496} height={650} alt="background"></img>
                <nav> 
                    <li><a href="/">Início</a></li>
                    <li><a href="/projetos">Projetos</a></li>
                    <li><a href="/quemsou">Quem Sou</a></li>
                </nav>
                <Content>
                    <h1>Curso Web Fundamentos</h1>
                    <p>Aprenda HTML, CSS e Javascript</p>
                </Content>
            </div>
        </Container>
    )
}

export default Header;