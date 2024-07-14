// src/api/predict.js (This is a mock example. Replace with actual logic)
import express from 'express';
const router = express.Router();

router.post('/predict', (req, res) => {
    const { age, bmi, glucose } = req.body;
    // Replace with actual prediction logic
    const prediction = (glucose > 140) ? 'High risk of diabetes' : 'Low risk of diabetes';
    res.json({ prediction });
});

export default router;
