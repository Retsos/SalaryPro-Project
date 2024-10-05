import React, { useEffect } from 'react';
import './DataChange.css';

export default function DataChange({ showModal2, setShowModal2 }) {
    const handleClose = () => setShowModal2(false);

    useEffect(() => {
        if (showModal2) {
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
    }, [showModal2]);

    if (!showModal2) return null;

    return (
        <>
            <div className="modal show custome-modal" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog modal-dialog-centered custom-modal-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Modal title</h3>
                            <button type="button" onClick={handleClose} className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn custome-button" onClick={handleClose}>Αποθήκευση Αλλαγών</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
