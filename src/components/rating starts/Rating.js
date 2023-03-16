import React, { useState } from 'react';
import './Rating.css';
import { FaStar } from "react-icons/fa";

const StartRating = () =>{
    const [rating, setRating] = useState(null);
    return(
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return(
                    <label>
                        <input type="radio" 
                        name="rating" 
                        valeu={ratingValue}
                        onClick={() => setRating(ratingValue)} />
                        <FaStar size={18} className={ratingValue <= rating ? "on" : "off"} />
                    </label>
                );
            })}
        </div>
    );
};

export default StartRating;