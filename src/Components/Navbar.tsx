import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    color: #373D3F;
    font-style: italic;
    padding: 2rem 15rem;
    background-color: #fff;
    border-bottom: .2rem solid #EBEBEB;

    #title {
        font-size: 1.5rem;
    }

    ul {
        list-style-type: none;
    }
`;

const Navbar: React.FC = () => {
    return (
        <StyledNav>
            <ul>
                <li id="title"><strong>My Favorite</strong> Super-Heros</li>
            </ul>
        </StyledNav>
    );
};

export default Navbar;