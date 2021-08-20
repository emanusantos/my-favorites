import styled from "styled-components";
import { GiBatMask } from 'react-icons/gi';

const StyledNav = styled.nav`
    display: flex;
    color: #373D3F;
    font-style: italic;
    padding: 2rem 10rem;
    background-color: #fff;
    border-bottom: .1rem solid #EBEBEB;

    #title {
        font-size: 1.5rem;
        cursor: default;
        
        &:hover {
            filter: brightness(1.5);
            transition-duration: .4s;
        }
    }

    ul {
        list-style-type: none;
    }
`;

const Underline = styled.div`
    position: absolute;
    top: 2rem;
    left: 10.2rem;
    width: 8rem;
    height: .2rem;
    background-color: #2C3539;
    border-radius: .4rem;
`;

const Navbar: React.FC = () => {
    return (
        <>
        <StyledNav>
            <ul>
                <li id="title"><strong>My Favorite </strong><GiBatMask/> Super-Heros</li>
            </ul>
        </StyledNav>
        <Underline />
        </>
    );
};

export default Navbar;