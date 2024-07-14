// src/components/DiabetesForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DiabetesForm = () => {
    const [formData, setFormData] = useState({
        age: '',
        bmi: '',
        glucose: '',
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/predict', formData);
            setResult(response.data);
        } catch (error) {
            console.error('Error making prediction', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div>
                    <label>BMI:</label>
                    <input type="number" name="bmi" value={formData.bmi} onChange={handleChange} required />
                </div>
                <div>
                    <label>Glucose Level:</label>
                    <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} required />
                </div>
                <button type="submit">Predict</button>
            </form>
            {result && <div>Prediction: {result.prediction}</div>}
        </div>
    );
};

export default DiabetesForm;
