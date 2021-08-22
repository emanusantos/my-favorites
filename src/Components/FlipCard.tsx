import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    margin: 1rem;
    text-align: center;
    width: 100%;
    height: 100%;
    width: 12rem;
    height: 17rem;

    p {
        font-style: italic;
    }

    img {
        clip-path: circle();
        max-width: 8rem;
        max-height: 15rem;
    }

    &:hover .card {
        transform: rotateY(180deg);
    }

    input {
        display: none;
    }
    
    .star {
        cursor: pointer;
        transition: color 200ms;
    }
`;

const Card = styled.div`
    width: 100%;
    height: 100%;
    transition: transform .6s ease-in-out;
    transform-style: preserve-3d;

    figure {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 1rem;
        margin: 0;
    }

    .front {
        background: #F7F7F7;
    }

    .back {
        background: #fff;
        transform: rotateY(180deg);
    }

    &:hover {
        transform: rotateY(45deg);
        box-shadow: 0px 3px 25px #00000014;
    }
`;

const FlipCard = ({ src, name, children }: any) => {
    return (
            <CardContainer>
                <Card className="card">
                    <figure className="front">
                        <img src={src} alt="" />
                        <p>{name}</p>
                    </figure>
                    <figure className="back">
                        { children }
                    </figure>
                </Card>
            </CardContainer>
    );
}

export default FlipCard;