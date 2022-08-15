import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }) {
    return(
        <>
        <Header/>
        <Main>{ children }</Main>
        <Footer/>
        
        
        </>
    )
} 

export default Layout;