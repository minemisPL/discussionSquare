import Header from "./header/Header";
import Container from "./container/Container";
import Footer from "./footer/Footer";
import "./header/header.css"
import "./container/container.css"
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import "./container/container.css"
import "./footer/footer.css"
import CommentDataProvider from "./dataManagment/commentData";

function App() {

    return (
        <div className="App dupa">
            <ThemeProvider theme={themes.desertLight}>
                <Header />
                <CommentDataProvider>
                    <Container />
                </CommentDataProvider>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
