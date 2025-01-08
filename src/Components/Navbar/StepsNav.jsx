import React from 'react';
import './StepsNav.css';

export default function StepsNavbar({ currentStep }) {
    const steps = [
        "Στοιχεία Χρήστη",
        "Στοιχεία Εταιρείας",
        "Επιλογή Πακέτου",
        "Ολοκλήρωση"
    ];

    return (
        <div className="steps-navbar">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`step ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}
                >
                    <span className="step-number">{index + 1}</span>
                    <span className="step-label">{step}</span>
                </div>
            ))}
        </div>
    );
}
