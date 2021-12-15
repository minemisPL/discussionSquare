import styled from "styled-components";

const Footer = () => {

    const Footer = styled.footer`
      background-color: ${props => props.theme.secondaryDark};
      color: ${props => props.theme.detailColor};
    `

    return (
        <Footer>
            <p>Mateusz Minemis Dąbrowski 15 December 2021</p>
        </Footer>
    );
};

export default Footer;