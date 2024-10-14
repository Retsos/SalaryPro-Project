import React, { useEffect } from 'react';
import './DataChange.css';

export default function DataChange({ showModal2, setShowModal2, ypallilos  }) {
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
                        <div className="modal-header" style={{borderBottom: "1px solid grey"}}>
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Στοιχεία του {ypallilos.Yname} {ypallilos.Yepitheto}</h3>
                            <button type="button" onClick={handleClose} className="btn-close" aria-label="Close" style={{ marginTop: "-3%", marginRight: "-0.5%", border: "3px solid grey" }}></button>
                        </div>
                        <div className="row ">

                            <div className="col-12 col-md-3 p-3">
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFathername" className="form-label">Όνομα Πατέρα</label>
                                    <input type="text" className="form-control" id="formEmployeeFathername" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFathersurname" className="form-label">Επίθετο Πατέρα</label>
                                    <input type="text" className="form-control" id="formEmployeeFathersurname" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeMothername" className="form-label">Όνομα Μητέρας</label>
                                    <input type="text" className="form-control" id="formEmployeeMothername" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeMothersurname" className="form-label">Επίθετο Μητέρας</label>
                                    <input type="text" className="form-control" id="formEmployeeMothersurname" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeGender" className="form-label">Φύλο</label>
                                    <select className="form-select" id="formEmployeeGender">
                                        <option value=""></option>
                                        <option value="male">Άνδρας</option>
                                        <option value="female">Γυναίκα</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFAMILY" className="form-label">Οικογενειακή κατάσταση</label>
                                    <select className="form-select" id="formEmployeeFAMILY">
                                        <option value=""></option>
                                        <option value="Έγγαμος">Έγγαμος</option>
                                        <option value="Άγαμος">Άγαμος</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-12 col-md-3 p-3">
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeHUSBANDNAME" className="form-label">Όνομα Συζύγου</label>
                                    <input type="text" className="form-control" id="formEmployeeHUSBANDNAME" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeHusbandSurname" className="form-label">Επίθετο Συζύγου</label>
                                    <input type="text" className="form-control" id="formEmployeeHusbandSurname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAFM" className="form-label">Α.Φ.Μ.</label>
                                    <input type="number" className="form-control" id="formEmployeeAFM" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAMA" className="form-label">A.M.A</label>
                                    <input type="number" className="form-control" id="formEmployeeAMA" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAnapiros" className="form-label">Ανάπηρος</label>
                                    <select className="form-select" id="formEmployeeAnapiros">
                                        <option value=""></option>
                                        <option value="yes">Ναι</option>
                                        <option value="no">Όχι</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeDateBorn" className="form-label">Ημερομηνία Γέννησης</label>
                                    <input type="date" className="form-control" id="formEmployeeDateBorn" placeholder="" />
                                </div>
                            </div>

                            <div className="col-12 col-md-3 p-3">
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChild" className="form-label">Αριθμός παιδιών</label>
                                    <input type="number" className="form-control" id="formEmployeeChild" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildFMY" className="form-label">Αριθμός παιδιών για Φ.Μ.Υ.</label>
                                    <input type="number" className="form-control" id="formEmployeeChildFMY" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildSSE" className="form-label">Αριθμός παιδιών για Σ.Σ.Ε</label>
                                    <input type="number" className="form-control" id="formEmployeeChildSSE" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildAnapira" className="form-label">Αριθμός ανάπηρων παιδιών</label>
                                    <input type="text" className="form-control" id="formEmployeeChildAnapira" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildAnapira" className="form-label">Αριθμός ανάπηρων παιδιών</label>
                                    <input type="text" className="form-control" id="formEmployeeChildAnapira" placeholder="" />
                                </div>
                            </div>

                            <div className="col-12 col-md-3 p-3">
                                <div className=" mb-3">
                                    <label htmlFor="formEmployeeId" className="form-label">Είδος Ταυτότητας</label>
                                    <select className="form-select" id="formEmployeeId">
                                        <option value=""></option>
                                        <option value="Αστυνομική">Αστυνομική</option>
                                    </select>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="formEmployeeIdNumber" className="form-label">Αριθμός Ταυτότητας</label>
                                    <input type="text" className="form-control" id="formEmployeeIdNumber" placeholder="" />
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="formEmployeeIdDate" className="form-label">Ημερομηνία Έκδοσης</label>
                                    <input type="date" className="form-control" id="formEmployeeIdDate" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeIdPlace" className="form-label">Αρχή Έκδοσης</label>
                                    <input type="text" className="form-control" id="formEmployeeIdPlace" placeholder="" />
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="formEmployeeEducation" className="form-label">Εκπαίδευση</label>
                                    <select className="form-select" id="formEmployeeEducation">
                                        <option value=""></option>
                                        <option value="Πανεπιστήμιο">Πανεπιστημιακή</option>
                                        <option value="Λύκειο">Λυκείου</option>
                                        <option value="Γυμνάσιο">Γυμνασίου</option>
                                    </select>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="formEmployeeJob" className="form-label">Ειδικότητα Εργαζομένου</label>
                                    <input type="text" className="form-control" id="formEmployeeJob" placeholder="" />
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer" style={{borderTop: "1px solid grey"}}>
                            <button type="button" className="btn custome-button" onClick={handleClose}>Αποθήκευση Αλλαγών</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}