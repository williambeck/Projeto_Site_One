import { Container, Content, Menulink } from "./styles";


 function Header() {
    return (
        <Container>           
                <Menulink>                                         
                    <li><a href="/">Início</a></li>
                    <li><a href="/projetos">Projetos</a></li>
                    <li><a href="/quemsou">Quem Sou</a></li>
                    
                </Menulink>
                <Content>
                    <h1>Curso Web Fundamentos</h1>
                    <p>Aprenda HTML, CSS e Javascript</p>
                </Content>
            
        </Container>
    )
}

export default Header;