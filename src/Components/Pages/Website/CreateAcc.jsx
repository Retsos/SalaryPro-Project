import React, { useState } from 'react';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Navbar/Footer';
import StepsNavbar from '../../Navbar/StepsNav';
import './CreateAcc.css';
import SampleSlider from '../../Cards/SampleSlider';

export default function CreateAcc() {
    const [currentStep, setCurrentStep] = useState(0);

    const goToNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <Navbar />
            <div className="page create-account">
                <StepsNavbar currentStep={currentStep} />
                <div className="container mt-5">
                    {currentStep === 0 && (
                        <>
                            <h2 className="text-center">Στοιχεία Χρήστη</h2>
                            <form className="mt-4">
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Ονοματεπώνυμο</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Πλήρες Όνομα"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Τηλέφωνο</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder="Αριθμός Τηλεφώνου"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Κωδικός Πρόσβασης</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Κωδικός"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Επιβεβαίωση Κωδικού</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Επιβεβαίωση Κωδικού"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary" onClick={goToNextStep}>Επόμενο</button>
                                </div>
                            </form>
                        </>
                    )}

                    {currentStep === 1 && (
                        <>
                            <h2 className="text-center">Στοιχεία Εταιρείας</h2>
                            <form className="mt-4">
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Όνομα Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Όνομα Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyAFM" className="form-label">Α.Φ.Μ. Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyAFM"
                                        name="companyAFM"
                                        placeholder="Α.Φ.Μ. Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Διεύθυνση Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="CompanyDiey"
                                        name="CompanyDiey"
                                        placeholder="Διεύθυνση Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Τηλέφωνο Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="CompanyDial"
                                        name="CompanyDial"
                                        placeholder="Τηλέφωνο Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Email Εταιρείας</label>
                                    <input
                                        type="Email"
                                        className="form-control"
                                        id="CompanyMail"
                                        name="CompanyMail"
                                        placeholder="Email Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Ιστοσελίδα Εταιρείας (Αν υπάρχει)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="CompanyPage"
                                        name="CompanyPage"
                                        placeholder="Ιστοσελίδα Εταιρείας"
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-secondary" onClick={goToPreviousStep}>Προηγούμενο</button>
                                    <button type="button" className="btn btn-primary" onClick={goToNextStep}>Επόμενο</button>
                                </div>
                            </form>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <h2 className="text-center mb-4">Επιλογή Πακέτου</h2>
                            <SampleSlider/>
                            <div className="text-center mt-4">
                                <button type="button" className="btn btn-secondary me-3" onClick={goToPreviousStep}>
                                    Προηγούμενο
                                </button>
                                <button type="button" className="btn btn-primary" onClick={goToNextStep}>
                                    Επόμενο
                                </button>
                            </div>
                        </>
                    )}

                    {currentStep === 3 && (
                        <>
                            <h2 className="text-center">Στοιχεία Εταιρείας</h2>
                            <form className="mt-4">
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Όνομα Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Όνομα Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyAFM" className="form-label">Α.Φ.Μ. Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyAFM"
                                        name="companyAFM"
                                        placeholder="Α.Φ.Μ. Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">Διεύθυνση Εταιρείας</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="CompanyDiey"
                                        name="CompanyDiey"
                                        placeholder="Διεύθυνση Εταιρείας"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-secondary" onClick={goToPreviousStep}>Προηγούμενο</button>
                                    <button type="button" className="btn btn-success" style={{ margin: "10px 0" }}>Ολοκλήρωση</button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}
