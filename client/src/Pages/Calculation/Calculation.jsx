import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';

function Calculation() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/api/calculate-bmi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ height, weight })
        });
        const data = await response.json();
        setBmi(data.bmi);
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label>
                    Height (feet):
                    <input type="number" value={height} onChange={handleHeightChange} />
                </label>
                <label>
                    Weight (kg):
                    <input type="number" value={weight} onChange={handleWeightChange} />
                </label>
                <button type="submit">Calculate BMI</button>
            </form>
            {bmi !== null && (
                <p>Your BMI is {bmi.toFixed(2)}</p>
            )}
        </div>
    )
}

export default Calculation