import { Container, Content } from "./styles";


 function Header() {
    return (
        <Container>
            
                
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