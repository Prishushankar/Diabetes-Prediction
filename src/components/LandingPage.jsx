// src/LandingPage.jsx
// src/components/LandingPage.jsx
import React from 'react';
import DiabetesForm from './DiabetesForm';

const LandingPage = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Welcome to the Diabetes Prediction Tool</h1>
            </header>
            <main style={styles.main}>
                <p style={styles.description}>
                    Enter your health metrics to predict your risk of diabetes.
                </p>
                <DiabetesForm />
            </main>
            <footer style={styles.footer}>
                <p className="text-center">&copy; 2024 Diabetes Prediction Tool. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
    },
    title: {
        fontSize: '2.5em',
    },
    main: {
        padding: '20px',
    },
    description: {
        fontSize: '1.9em',
    },
    footer: {
        backgroundColor: '#282c34',
        padding: '7px',
        color: 'white',
        position: 'fixed',
        width: '100%',
        bottom: 12,
        left: 0,
    },
};

export default LandingPage;
