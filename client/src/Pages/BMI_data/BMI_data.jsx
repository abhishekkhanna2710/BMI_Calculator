import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./BMI.css"
function BMI_data() {
    const [bmis, setBmis] = useState([]);

    useEffect(() => {
        fetch('https://bmi-bclr.onrender.com/api/calculate-bmi')
            .then(response => response.json())
            .then(data => setBmis(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='Bmi_data'>
            <Navbar />
            <h1>BMI Data</h1>
            <table className="table-style">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Height (ft)</th>
                        <th>Weight (kg)</th>
                        <th>BMI (kg/m2)</th>
                    </tr>
                </thead>
                <tbody>
                    {bmis.map((bmi, index) => (
                        <tr key={bmi._id}>
                            <td>{index + 1}</td>
                            <td>{bmi.height}</td>
                            <td>{bmi.weight}</td>
                            <td>{bmi.bmi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BMI_data;
