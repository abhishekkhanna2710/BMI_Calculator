import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import "./Calculation.css"

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
        <div >
            <Navbar />
            <div className='main_bmi'>
                <h1>BMI Calculator</h1>

                <form className='Bmi_cal' onSubmit={handleSubmit}>
                    <label>
                        Height (ft): &nbsp; &nbsp;
                        <input type="number" value={height} onChange={handleHeightChange} />
                    </label>
                    <br />
                    <label>
                        Weight (kg): &nbsp;
                        <input type="number" value={weight} onChange={handleWeightChange} />
                    </label>
                    <br />
                    <div className='btn-top'>

                        <button className='btn' type="submit">Calculate BMI</button>
                    </div>
                </form>
                {bmi !== null && (
                    <p className='Result'><span style={{ color: "red" }}>Result :</span> Your BMI is {bmi.toFixed(2)} kg/m2</p>
                )}

                <img className='imago' src="https://hips.hearstapps.com/hmg-prod/images/1076/bmi-myths-main-1515702962.jpg?crop=1xw:0.786xh;center,top&resize=1200:*" alt="" />
            </div>
        </div>
    )
}

export default Calculation