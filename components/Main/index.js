import { Container, Contentsection } from "../Main/styles";


function Main() {
    return (
        <>
        <Container>
        <Contentsection>
            <div classname='card'>
                <img src="imagens/card_01.png" alt=""/>
                <p>Seletores</p>
            </div>

            <div classname='card'>
                <img src="imagens/card_02.jpg" alt=""/>
                <p>Posicionamento</p>
            </div>

            <div classname='card'>
                <img src="imagens/card_03.jpg" alt="" />
                <p>Fontes</p>
            </div>
        </Contentsection>
        
        <section classname="content_section">
                <article>
                    <header classname="content-header"><h2>Titulo do article</h2></header>
                    <p>Paragrafo 1</p>
                    <p>Paragrafo 2</p>
                </article>
            </section>
            
            </Container></>


    )
}

export default Main;