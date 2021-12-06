import styled from "styled-components";

const Header = () => {

    const TopHeader = styled.header`
      color: ${props => props.theme.detailColor};
      background-color: ${props => props.theme.primaryColor};
    `

    return (
        <TopHeader>
            <p>Discussion square</p>
        </TopHeader>
    );
};

export default Header;