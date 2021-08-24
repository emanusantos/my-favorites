import styled from "styled-components";
import { GiBatMask, GiSpiderMask, GiLightningMask, GiIronMask } from 'react-icons/gi';

const StyledNav = styled.nav`
    display: flex;
    color: #373D3F;
    font-style: italic;
    padding: 2rem 10rem;
    background-color: #F5F5F5;
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
        display: flex;
        justify-content: space-between;
        gap: 30.5rem;
        list-style-type: none;
    }

    @media (max-width: 50rem) {
        padding: 2rem 7rem;

        ul {
            width: 100%;
            gap: 10rem;
        }
    };
`;

const Underline = styled.div`
    position: absolute;
    top: 2rem;
    left: 10.2rem;
    width: 8rem;
    height: .2rem;
    background-color: #2C3539;
    border-radius: .4rem;

    @media (max-width: 50rem) {
        left: 7rem;
        width: 6rem;
    }
`;

const Navbar: React.FC = () => {
    return (
        <>
        <StyledNav>
            <ul>
                <li id="title"><strong>My Favorite </strong><GiBatMask/> Super-Heros</li>
                <li id="masksLogo"><GiSpiderMask size="2rem" /> <GiLightningMask size="2rem" /> <GiIronMask size="2rem" /> </li>
            </ul>
        </StyledNav>
        <Underline />
        </>
    );
};

export default Navbar;