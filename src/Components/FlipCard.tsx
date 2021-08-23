import { useState } from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';
import { GrDown} from 'react-icons/gr';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    margin: 1rem;
    text-align: center;
    width: 12rem;
    max-height: 23rem;
    background-color: #e2e2e2;
    border-radius: 1rem;
    box-shadow: 0px 3px 25px #00000014;

    p {
        font-style: italic;
    }

    img {
        clip-path: circle();
        max-width: 8rem;
        max-height: 15rem;
    }

    .ratings {
        display: none;
    }
    
    .star {
        cursor: pointer;
        transition: color 200ms;
    }

    &:hover {
        transform: scale(1.2);
        transition-duration: .5s;
    }
`;

const Card = styled.div`
    width: 100%;
    height: 100%;

    figure {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        margin: 0;
    }

    #collapse {
        cursor: pointer;
    }

    .option {
        display: flex;
        justify-content: space-between;
        padding: .3rem;
        font-style: italic;
    }
    
    .option input {
        display: inline-block;
        width: auto;
    }

    .option label {
        margin-right: .2rem;
        display: inline-block;
    }
`;

const FlipCard = ({ src, name, value }: any) => {
    const [interest, setInterest] = useState<boolean>(false);
    const [radio, setRadio] = useState<string | null>(null);

    const toggleInterest = (): void => {
        setInterest(!interest);
    }

    return (
            <CardContainer>
                <Card className="card">
                    <figure>
                        <img src={src} alt="" />
                        <StarRating />
                        <p>{name} <GrDown id="collapse" size={15} onClick={toggleInterest} /></p>
                        {interest && <div className="info">
                            <div className="option">
                                <label>Already seen</label>
                                <input 
                                className="interests" 
                                type="radio" 
                                value="seen" 
                                checked={radio === 'seen'} 
                                onChange={(e) => setRadio(e.target.value)} 
                                />
                            </div>          
                            <div className="option">
                                <label>Yet to see</label>
                                <input 
                                className="interests" 
                                type="radio" 
                                value="yet" 
                                checked={radio === 'yet'} 
                                onChange={(e) => setRadio(e.target.value)} />
                            </div>
                            <div className="option">
                                <label>Never seen</label>
                                <input 
                                className="interests" 
                                type="radio" 
                                value="never" 
                                checked={radio === 'never'} 
                                onChange={(e) => setRadio(e.target.value)}
                                />
                            </div>
                        </div>}
                    </figure>
                </Card>
            </CardContainer>
    );
}

export default FlipCard;