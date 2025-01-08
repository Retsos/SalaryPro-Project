import './PaymentModal.css'; 

export default function PaymentModal({ showModal, setShowModal }) {
    
    const handleClose = () => setShowModal(false);

    if (!showModal) return null;

    return (
        <div className="modal show" style={{ display: 'block'}} tabIndex="-1" aria-labelledby="modalLabel">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="text-center">Στοιχεία Πληρωμής</h2>
                        <button type="button" className="btn-close" style={{border: "3px solid grey"}} aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                            <CiBank size="2em" className="icon-background"/>
                            <form className="mt-4">
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">Αριθμός Κάρτας</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="1234 5678 9123 4567"
                                    maxLength="16"
                                    required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cardHolder" className="form-label">Όνομα Κατόχου</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="cardHolder"
                                    name="cardHolder"
                                    placeholder="Όνομα Κατόχου"
                                    required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="expiryDate" className="form-label">Ημερομηνία Λήξης</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="expiryDate"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cvv" className="form-label">CVV</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="CVV"
                                    maxLength="3"
                                    required
                                    />
                                </div>
                                
                                <div className="text-center">
                                    <button type="button" className="btn btn-secondary" onClick={goToPreviousStep}>Προηγούμενο</button>
                                    <button type="button" className="btn btn-primary" onClick={goToNextStep}>Επόμενο</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}