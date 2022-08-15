import { Background, Container, Content, Banner } from "./styles";
import Image from "next/image";

 function Header() {
    return (
        <Container>
            
                {/*<Image 
                src="/imagens/bg-3.jpg"
                width="1600" 
                height="650" 
    alt="background"/>*/}
                <nav> 
                    <li><a href="/">Início</a></li>
                    <li><a href="/projetos">Projetos</a></li>
                    <li><a href="/quemsou">Quem Sou</a></li>
                </nav>
                <Content>
                    <h1>Curso Web Fundamentos</h1>
                    <p>Aprenda HTML, CSS e Javascript</p>
                </Content>
            
        </Container>
    )
}

export default Header;