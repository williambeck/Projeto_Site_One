import { Container, Contentsection, Card } from "../Main/styles";


function Main() {
    return (
        <>
        <Container>
            <Contentsection>
                <Card>
                    <img src="imagens/card_01.png" alt=""/>
                    <p>Seletores</p>
                </Card>

                <Card>
                    <img src="imagens/card_02.jpg" alt=""/>
                    <p>Posicionamento</p>
                </Card>

                <Card>
                    <img src="imagens/card_03.jpg" alt="" />
                    <p>Fontes</p>
                </Card>
        </Contentsection>
        
        <Contentsection>
                <article>
                    <header classname="content-header"><h2>Titulo do Article</h2></header>
                    <p>Paragrafo 1</p>
                    <p>Paragrafo 2</p>
                </article>
            </Contentsection>
            
            </Container></>


    )
}

export default Main;