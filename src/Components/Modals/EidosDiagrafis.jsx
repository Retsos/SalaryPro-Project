import React, { useState, useEffect } from 'react';
import './EidosDiagrafis.css'; 

export default function EidosDiagrafis({ showModal, setShowModal, onConfirm }) {
    
    const [formData, setFormData] = useState({
        deleteType: '',
        description: ''
    });
    
    const [formValidated, setFormValidated] = useState(false); 

    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        setFormValidated(true); 

        if (formData.deleteType !== "" && form.checkValidity()) {
            onConfirm(formData);
            setShowModal(false);
        } else {
            form.classList.add('was-validated');
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('modal-open');
            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop fade show';
            document.body.appendChild(backdrop);
        } else {
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }
        return () => {
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        };
    }, [showModal]);

    if (!showModal) return null;

    return (
        <div className="modal show" style={{ display: 'block'}} tabIndex="-1" aria-labelledby="modalLabel">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="modalLabel">Συμπληρώστε τα παρακάτω</h4>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Περιγραφή</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <div className="invalid-feedback">Παρακαλώ συμπληρώστε το παραπάνω πεδίο</div>
                            </div>
                            <div className=" mb-3">
                                <label htmlFor="deleteType" className="form-label">Τύπος Διαγραφής</label>
                                <select 
                                    className={`form-select ${formValidated && formData.deleteType === "" ? 'is-invalid' : ''}`}
                                    id="deleteType"
                                    value={formData.deleteType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Επιλέξτε τύπο διαγραφής</option>
                                    <option value="Willingly">Οικειοθελής Παραίτηση</option>
                                    <option value="Warned">Απόλυση με προειδοποίηση</option>
                                    <option value="NotWarned">Απόλυση χωρίς προειδοποίηση</option>
                                    <option value="feygei40%">Λόγω συνταξιοδότησης 40%</option>
                                    <option value="feygei50%">Λόγω συνταξιοδότησης 50%</option>
                                    <option value="TimesUp">Λόγω ορισμένου χρόνου ή λήξη έργου</option>
                                </select>
                                <div className="invalid-feedback">Επιλέξτε ένα από τα παραπάνω</div>
                            </div>
                            <button type="submit" className="btn btn-outline-danger btn-full-width">Διαγραφή</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}