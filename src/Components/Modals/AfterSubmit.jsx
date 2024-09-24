import React, { useEffect } from 'react';
import './AfterSubmit.css';

export default function AfterSubmit({ showModal, setShowModal }) {
    const handleClose = () => setShowModal(false);

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
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">SalaryPro</h1>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Ο Υπάλληλος προστέθηκε με επιτυχία</p>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button id="okbtn" type="button" className="btn custom-btn" onClick={handleClose}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}