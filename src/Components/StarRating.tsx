import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating: React.FC = () => {

    const [rating, setRating] = useState<null | number>(null);
    const [hover, setHover] = useState<null | number>(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                const valueHandler = (): void => {
                    setRating(ratingValue);
                    localStorage.setItem('rating', ratingValue.toString());
                };

                return (
                    <label>
                        <input 
                        className="ratings"
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={valueHandler} 
                        />
                        <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating!) ? "#ffc107" : "#777"} 
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)} 
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;