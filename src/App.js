import Header from "./header/Header";
import Container from "./container/Container";
import Footer from "./footer/Footer";
import "./header/header.css"
import "./container/container.css"
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import "./container/container.css"

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={themes.desertLight}>
                <Header />
                <Container />
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
